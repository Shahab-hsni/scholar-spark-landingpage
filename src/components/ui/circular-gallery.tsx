import { useRef, useEffect } from 'react';
import { Renderer, Camera, Transform, Plane, Mesh, Program, Texture } from 'ogl';

type GL = Renderer['gl'];

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: number;
  return function (this: any, ...args: Parameters<T>) {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance: any): void {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function getFontSize(font: string): number {
  const match = font.match(/(\d+)px/);
  return match ? parseInt(match[1], 10) : 30;
}

function createTextTexture(
  gl: GL,
  text: string,
  font: string = 'bold 30px monospace',
  color: string = 'black'
): { texture: Texture; width: number; height: number } {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Could not get 2d context');

  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const fontSize = getFontSize(font);
  const textHeight = Math.ceil(fontSize * 1.2);

  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;

  context.font = font;
  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

interface TeamMemberProps {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  name: string;
  role: string;
  description: string;
  textColor?: string;
  font?: string;
}

class TeamMember {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  name: string;
  role: string;
  description: string;
  textColor: string;
  font: string;
  nameMesh!: Mesh;
  roleMesh!: Mesh;
  descriptionMesh!: Mesh;

  constructor({
    gl,
    plane,
    renderer,
    name,
    role,
    description,
    textColor = '#ffffff',
    font = 'bold 24px DM Sans',
  }: TeamMemberProps) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.name = name;
    this.role = role;
    this.description = description;
    this.textColor = textColor;
    this.font = font;
    this.createMeshes();
  }

  createMeshes() {
    // Create name texture
    const {
      texture: nameTexture,
      width: nameWidth,
      height: nameHeight,
    } = createTextTexture(this.gl, this.name, 'bold 28px DM Sans', this.textColor);

    // Create role texture
    const {
      texture: roleTexture,
      width: roleWidth,
      height: roleHeight,
    } = createTextTexture(this.gl, this.role, '18px DM Sans', this.textColor);

    // Create description texture
    const {
      texture: descTexture,
      width: descWidth,
      height: descHeight,
    } = createTextTexture(this.gl, this.description, '14px DM Sans', this.textColor);

    // Create a single program with proper shaders
    const vertexShader = `
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform sampler2D tMap;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tMap, vUv);
        if (color.a < 0.1) discard;
        gl_FragColor = color;
      }
    `;

    const geometry = new Plane(this.gl);

    // Name mesh - larger and more visible
    const nameProgram = new Program(this.gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: { tMap: { value: nameTexture } },
      transparent: true,
    });
    this.nameMesh = new Mesh(this.gl, { geometry, program: nameProgram });
    const nameAspect = nameWidth / nameHeight;
    const nameHeightScaled = this.plane.scale.y * 0.15; // Increased from 0.08
    const nameWidthScaled = nameHeightScaled * nameAspect;
    this.nameMesh.scale.set(nameWidthScaled, nameHeightScaled, 1);
    this.nameMesh.position.y = this.plane.scale.y * 0.4; // Moved down
    this.nameMesh.setParent(this.plane);

    // Role mesh - larger and more visible
    const roleProgram = new Program(this.gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: { tMap: { value: roleTexture } },
      transparent: true,
    });
    this.roleMesh = new Mesh(this.gl, { geometry, program: roleProgram });
    const roleAspect = roleWidth / roleHeight;
    const roleHeightScaled = this.plane.scale.y * 0.08; // Increased from 0.05
    const roleWidthScaled = roleHeightScaled * roleAspect;
    this.roleMesh.scale.set(roleWidthScaled, roleHeightScaled, 1);
    this.roleMesh.position.y = this.plane.scale.y * 0.25; // Moved down
    this.roleMesh.setParent(this.plane);

    // Description mesh - larger and more visible
    const descProgram = new Program(this.gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: { tMap: { value: descTexture } },
      transparent: true,
    });
    this.descriptionMesh = new Mesh(this.gl, { geometry, program: descProgram });
    const descAspect = descWidth / descHeight;
    const descHeightScaled = this.plane.scale.y * 0.1; // Increased from 0.06
    const descWidthScaled = descHeightScaled * descAspect;
    this.descriptionMesh.scale.set(descWidthScaled, descHeightScaled, 1);
    this.descriptionMesh.position.y = this.plane.scale.y * 0.1; // Moved down
    this.descriptionMesh.setParent(this.plane);
  }
}

interface ScreenSize {
  width: number;
  height: number;
}

interface Viewport {
  width: number;
  height: number;
}

interface MediaProps {
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  name: string;
  role: string;
  description: string;
  viewport: Viewport;
  bend: number;
  textColor: string;
  borderRadius?: number;
  font?: string;
}

class Media {
  extra: number = 0;
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  name: string;
  role: string;
  description: string;
  viewport: Viewport;
  bend: number;
  textColor: string;
  borderRadius: number;
  font?: string;
  program!: Program;
  plane!: Mesh;
  teamMember!: TeamMember;
  scale!: number;
  padding!: number;
  width!: number;
  widthTotal!: number;
  x!: number;
  speed: number = 0;
  isBefore: boolean = false;
  isAfter: boolean = false;

  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    name,
    role,
    description,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font,
  }: MediaProps) {
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.name = name;
    this.role = role;
    this.description = description;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.createShader();
    this.createMesh();
    this.createTeamMember();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false });

    // Create a placeholder image to ensure texture is valid
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, 1, 1);
      texture.image = canvas;
    }

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          if(d > 0.0) {
            discard;
          }
          
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [1, 1] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    });

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
    img.onerror = () => {
      // Keep the placeholder texture if image fails to load
      console.warn('Failed to load image:', this.image);
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  createTeamMember() {
    this.teamMember = new TeamMember({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      name: this.name,
      role: this.role,
      description: this.description,
      textColor: this.textColor,
      font: this.font,
    });
  }

  update(scroll: { current: number; last: number }, direction: 'right' | 'left') {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }

  onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [
          this.viewport.width,
          this.viewport.height,
        ];
      }
    }
    this.scale = this.screen.height / 1500;
    this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width;
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

interface AppConfig {
  items?: { image: string; name: string; role: string; description: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
}

class App {
  container: HTMLElement;
  scroll: {
    ease: number;
    current: number;
    target: number;
    last: number;
    position?: number;
  };
  onCheckDebounce: (...args: any[]) => void;
  renderer!: Renderer;
  gl!: GL;
  camera!: Camera;
  scene!: Transform;
  planeGeometry!: Plane;
  medias: Media[] = [];
  mediasImages: { image: string; name: string; role: string; description: string }[] = [];
  screen!: { width: number; height: number };
  viewport!: { width: number; height: number };
  raf: number = 0;

  boundOnResize!: () => void;
  boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void;
  boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void;
  boundOnTouchUp!: () => void;

  isDown: boolean = false;
  start: number = 0;

  constructor(
    container: HTMLElement,
    {
      items,
      bend = 1,
      textColor = '#ffffff',
      borderRadius = 0,
      font = 'bold 30px DM Sans',
    }: AppConfig
  ) {
    document.documentElement.classList.remove('no-js');
    this.container = container;
    this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    this.renderer = new Renderer({ alpha: true });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0); // Transparent background for the canvas
    this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100,
    });
  }

  createMedias(
    items: { image: string; name: string; role: string; description: string }[] | undefined,
    bend: number = 1,
    textColor: string,
    borderRadius: number,
    font: string
  ) {
    const defaultItems = [
      {
        image: `https://picsum.photos/seed/1/800/600?grayscale`,
        name: 'Dr. Sarah Johnson',
        role: 'CEO & Co-Founder',
        description:
          'Leading AI research with 15+ years experience in machine learning and academic publishing.',
      },
      {
        image: `https://picsum.photos/seed/2/800/600?grayscale`,
        name: 'Dr. Michael Chen',
        role: 'CTO & Co-Founder',
        description:
          'Expert in distributed systems and research automation with PhD in Computer Science.',
      },
      {
        image: `https://picsum.photos/seed/3/800/600?grayscale`,
        name: 'Dr. Emily Rodriguez',
        role: 'Head of Research',
        description:
          'Specialist in systematic reviews and meta-analysis with 200+ published papers.',
      },
      {
        image: `https://picsum.photos/seed/4/800/600?grayscale`,
        name: 'Dr. James Wilson',
        role: 'Lead Data Scientist',
        description: 'Expert in NLP and knowledge extraction from academic literature.',
      },
      {
        image: `https://picsum.photos/seed/5/800/600?grayscale`,
        name: 'Dr. Lisa Thompson',
        role: 'Head of Product',
        description: 'UX researcher with focus on academic workflows and collaboration tools.',
      },
      {
        image: `https://picsum.photos/seed/6/800/600?grayscale`,
        name: 'Dr. Robert Kim',
        role: 'Senior ML Engineer',
        description: 'Specialist in transformer models and automated literature analysis.',
      },
      {
        image: `https://picsum.photos/seed/7/800/600?grayscale`,
        name: 'Dr. Maria Garcia',
        role: 'Research Director',
        description: 'Expert in bibliometrics and research impact measurement.',
      },
      {
        image: `https://picsum.photos/seed/8/800/600?grayscale`,
        name: 'Dr. David Lee',
        role: 'Head of Engineering',
        description: 'Full-stack developer with expertise in scalable research platforms.',
      },
      {
        image: `https://picsum.photos/seed/9/800/600?grayscale`,
        name: 'Dr. Anna Patel',
        role: 'Lead UX Designer',
        description: 'Design researcher focused on academic user experience and interface design.',
      },
      {
        image: `https://picsum.photos/seed/10/800/600?grayscale`,
        name: 'Dr. Thomas Brown',
        role: 'Head of Operations',
        description:
          'Operations expert with background in academic administration and project management.',
      },
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems);

    try {
      this.medias = this.mediasImages.map((data, index) => {
        return new Media({
          geometry: this.planeGeometry,
          gl: this.gl,
          image: data.image,
          index,
          length: this.mediasImages.length,
          renderer: this.renderer,
          scene: this.scene,
          screen: this.screen,
          name: data.name,
          role: data.role,
          description: data.description,
          viewport: this.viewport,
          bend,
          textColor,
          borderRadius,
          font,
        });
      });
    } catch (error) {
      console.error('Error creating medias:', error);
      this.medias = [];
    }

    console.log('Medias created:', this.medias.length);
  }

  onTouchDown(e: MouseEvent | TouchEvent) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = 'touches' in e ? e.touches[0].clientX : e.clientX;
  }

  onTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.isDown) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * 0.05;
    this.scroll.target = (this.scroll.position ?? 0) + distance;
  }

  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height,
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias && this.medias.length > 0) {
      this.medias.forEach(media =>
        media.onResize({ screen: this.screen, viewport: this.viewport })
      );
    }
  }

  update() {
    // Don't update if medias array is not ready
    if (!this.medias || this.medias.length === 0) {
      this.raf = window.requestAnimationFrame(this.update.bind(this));
      return;
    }

    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    this.medias.forEach(media => media.update(this.scroll, direction));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('mousedown', this.boundOnTouchDown);
    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    window.addEventListener('touchstart', this.boundOnTouchDown);
    window.addEventListener('touchmove', this.boundOnTouchMove);
    window.addEventListener('touchend', this.boundOnTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('mousedown', this.boundOnTouchDown);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    window.removeEventListener('touchstart', this.boundOnTouchDown);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas as HTMLCanvasElement);
    }
  }
}

interface CircularGalleryProps {
  items?: { image: string; name: string; role: string; description: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
}

const CircularGallery = ({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px DM Sans',
}: CircularGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const app = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
    });
    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font]);

  return (
    <div
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing bg-transparent"
      ref={containerRef}
    />
  );
};

export const Component = CircularGallery;
