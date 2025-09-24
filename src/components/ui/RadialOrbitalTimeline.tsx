import React from 'react';
import { gsap } from 'gsap';

type TimelineStatus = 'completed' | 'in-progress' | 'pending';

export interface TimelineItem {
  id: number;
  title: string;
  content: string;
  status: TimelineStatus;
  energy: number; // 0-100 controls halo size and progress width
  icon: React.ElementType;
  relatedIds?: number[];
  gemini?: boolean; // show small blue star badge
}

interface RadialOrbitalTimelineProps {
  items: TimelineItem[];
  radius?: number; // orbit radius in px
}

const RadialOrbitalTimeline: React.FC<RadialOrbitalTimelineProps> = ({
  items,
  radius: propRadius = 280,
}) => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = React.useState<number>(0);
  const [autoRotate, setAutoRotate] = React.useState<boolean>(true);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [screenSize, setScreenSize] = React.useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const animRef = React.useRef<number | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const nodeRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const rotationTimeline = React.useRef<gsap.core.Timeline | null>(null);

  // Calculate responsive radius
  const radius = React.useMemo(() => {
    if (screenSize.width === 0) return propRadius; // Default during SSR
    if (screenSize.width < 640) return 160; // sm - increased from 120
    if (screenSize.width < 768) return 180; // md - increased from 140
    if (screenSize.width < 1024) return 200; // lg - increased from 180
    if (screenSize.width < 1280) return 240; // xl - increased from 220
    return propRadius; // 2xl and above
  }, [screenSize.width, propRadius]);

  // Track screen size changes
  React.useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial size
    updateScreenSize();

    // Add resize listener
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Set initial state immediately when component mounts
  React.useEffect(() => {
    // Use a timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      if (nodeRefs.current.length > 0) {
        console.log('Setting initial state for', nodeRefs.current.length, 'nodes');
        gsap.set(nodeRefs.current, {
          x: 0,
          y: 0,
          scale: 0.8,
          opacity: 0.7,
          zIndex: 1,
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection observer to detect when section comes into view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Update node positions when radius changes
  React.useEffect(() => {
    if (nodeRefs.current.length > 0) {
      nodeRefs.current.forEach((node, index) => {
        if (node) {
          const angle = ((index / items.length) * 360 + rotationAngle) % 360;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          gsap.set(node, { x, y });
        }
      });
    }
  }, [radius, rotationAngle, items.length]);

  // GSAP animation when section becomes visible
  React.useEffect(() => {
    if (isVisible && nodeRefs.current.length > 0) {
      console.log('Starting animation with', nodeRefs.current.length, 'nodes');

      // Create a master timeline
      const masterTimeline = gsap.timeline();

      // First set the final positions
      nodeRefs.current.forEach((node, index) => {
        if (node) {
          const angle = ((index / items.length) * 360) % 360;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          gsap.set(node, { x, y, scale: 1, opacity: 1, zIndex: 10 });
        }
      });

      // Animate from center to final positions
      masterTimeline.from(nodeRefs.current, {
        duration: 1.2,
        ease: 'power2.out',
        x: 0,
        y: 0,
        scale: 0.8,
        opacity: 0.7,
        zIndex: 1,
      });

      // After the initial animation, start continuous rotation
      masterTimeline.call(() => {
        if (autoRotate) {
          startRotation();
        }
      });
    }
  }, [isVisible, radius, items.length]);

  // Start continuous rotation using GSAP timeline
  const startRotation = React.useCallback(() => {
    if (rotationTimeline.current) {
      rotationTimeline.current.kill();
    }

    rotationTimeline.current = gsap.timeline({ repeat: -1 });

    rotationTimeline.current.to(
      { rotationAngle: 0 },
      {
        duration: 60, // 60 seconds for full rotation
        ease: 'none',
        rotationAngle: 360,
        onUpdate: function () {
          const currentAngle = this.targets()[0].rotationAngle;
          setRotationAngle(currentAngle);

          // Update all node positions
          nodeRefs.current.forEach((node, index) => {
            if (node) {
              const angle = ((index / items.length) * 360 + currentAngle) % 360;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              gsap.set(node, { x, y });
            }
          });
        },
      }
    );
  }, [radius, items.length]);

  // Resume rotation from current position when closing a card
  const resumeRotation = React.useCallback(() => {
    if (rotationTimeline.current && autoRotate) {
      // Kill the current timeline and create a new one from current position
      rotationTimeline.current.kill();

      rotationTimeline.current = gsap.timeline({ repeat: -1 });

      rotationTimeline.current.to(
        { rotationAngle: rotationAngle },
        {
          duration: 60, // 60 seconds for full rotation
          ease: 'none',
          rotationAngle: rotationAngle + 360,
          onUpdate: function () {
            const currentAngle = this.targets()[0].rotationAngle;
            setRotationAngle(currentAngle);

            // Update all node positions
            nodeRefs.current.forEach((node, index) => {
              if (node) {
                const angle = ((index / items.length) * 360 + currentAngle) % 360;
                const rad = (angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                gsap.set(node, { x, y });
              }
            });
          },
        }
      );
    }
  }, [rotationAngle, autoRotate, radius, items.length]);

  // Control rotation based on autoRotate state and active button
  React.useEffect(() => {
    if (autoRotate && isVisible && expandedId === null) {
      // Resume rotation from current position
      resumeRotation();
    } else if (rotationTimeline.current) {
      // Pause rotation
      rotationTimeline.current.pause();
    }
  }, [autoRotate, expandedId, resumeRotation, isVisible]);

  const total = items.length;

  const getStatusClasses = (status: TimelineStatus) => {
    if (status === 'completed') return 'text-white bg-black border-white';
    if (status === 'in-progress') return 'text-white bg-orange-500 border-orange-400';
    return 'text-white bg-black/40 border-white/50';
  };

  const onToggle = (id: number) => {
    setExpandedId(prev => {
      const next = prev === id ? null : id;
      setAutoRotate(next === null);
      return next;
    });
  };

  const centerToFrontAngle = (index: number) => {
    const target = (index / total) * 360; // unrotated position
    const desired = (270 - target + 360) % 360; // we want node at 270°

    // Pause the continuous rotation
    if (rotationTimeline.current) {
      rotationTimeline.current.pause();
    }

    // Smoothly animate from current rotationAngle to desired using shortest path
    const start = rotationAngle;
    let delta = desired - start;
    // wrap to [-180, 180] for shortest direction
    delta = ((delta + 540) % 360) - 180;
    const end = start + delta;

    // Animate rotation with GSAP
    gsap.to(
      { rotationAngle: start },
      {
        duration: 0.45,
        ease: 'power2.inOut',
        rotationAngle: end,
        onUpdate: function () {
          const currentAngle = this.targets()[0].rotationAngle;
          setRotationAngle(currentAngle);

          // Update all node positions
          nodeRefs.current.forEach((node, nodeIndex) => {
            if (node) {
              const angle = ((nodeIndex / items.length) * 360 + currentAngle) % 360;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              gsap.set(node, { x, y });
            }
          });
        },
        onComplete: () => {
          // Don't resume rotation here - let the effect handle it
        },
      }
    );
  };

  const handleRootClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.rotl-node-button') && !target.closest('.rotl-card')) {
      setExpandedId(null);
      setAutoRotate(true);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="rotl-root relative w-full flex items-center justify-center overflow-visible px-4 sm:px-6 lg:px-8"
      style={{ height: Math.max(radius * 2 + 200, 680), backgroundColor: '#0a090c' }}
      onClick={handleRootClick}
    >
      {/* Center orb */}
      <div className="rotl-center-orb absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full border border-white/10 shadow-inner flex items-center justify-center z-10">
        <div className="rotl-center-content text-center">
          <img
            src="/logos/logo.png"
            alt="ScholarSpark Logo"
            className="mx-auto mb-4 object-contain w-36 h-auto sm:w-44 md:w-48 lg:w-60"
          />
        </div>
      </div>

      {/* Outer orbit guideline */}
      <div
        className="rotl-orbit-guideline absolute rounded-full border border-white/10"
        style={{ width: radius * 2 + 160, height: radius * 2 + 160 }}
      />

      {/* Nodes */}
      {items.map((item, index) => {
        const isExpanded = expandedId === item.id;
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            ref={el => {
              nodeRefs.current[index] = el;
              return;
            }}
            className={`rotl-node absolute will-change-transform ${isExpanded ? 'z-[11]' : 'z-10'}`}
            style={{
              zIndex: isExpanded ? 11 : 10,
              transform: 'translate(0px, 0px)',
            }}
          >
            {/* Halo */}
            <div
              className={`rotl-node-halo absolute rounded-full -inset-1 ${isExpanded ? 'animate-pulse' : ''} z-0`}
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)',
                width: `${item.energy * 0.4 + 40}px`,
                height: `${item.energy * 0.4 + 40}px`,
                left: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                top: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
              }}
            />

            {/* Node button */}
            <button
              onClick={e => {
                e.stopPropagation();
                centerToFrontAngle(index);
                onToggle(item.id);
              }}
              className={`rotl-node-button relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 ${
                isExpanded
                  ? 'scale-150 text-white border-white'
                  : 'bg-black text-white border-white/40'
              } transition-all duration-300 flex items-center justify-center`}
              style={isExpanded ? { backgroundColor: '#8F8EDF' } : {}}
              aria-label={item.title}
            >
              <Icon size={screenSize.width < 640 ? 16 : 20} />

              {/* Status indicator - top left edge */}
              <div
                className={`absolute -top-0.5 -left-0.5 w-3 h-3 rounded-full border-2 ${
                  item.status === 'in-progress'
                    ? 'bg-orange-500 border-orange-400'
                    : 'bg-gray-500 border-gray-400'
                }`}
              ></div>

              {/* AI feature indicator - top right edge */}
              {item.gemini && (
                <span className="rotl-node-gemini absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M7.5 9.5C8.1 7.661 8.763 6.9975 10.5 6.5C8.763 6.0025 8.1 5.339 7.5 3.5C6.9 5.339 6.237 6.0025 4.5 6.5C6.237 6.9975 6.9 7.661 7.5 9.5ZM3.5 5C3.8 4.08 4.1315 3.7485 5 3.5C4.1315 3.2515 3.8 2.92 3.5 2C3.2 2.92 2.8685 3.2515 2 3.5C2.8685 3.7485 3.2 4.08 3.5 5ZM4.25 10C4.4 9.54 4.5655 9.3745 5 9.25C4.5655 9.1255 4.4 8.96 4.25 8.5C4.1 8.96 3.9345 9.1255 3.5 9.25C3.9345 9.3745 4.1 9.54 4.25 10Z"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </button>

            {/* Label */}
            {!isExpanded && (
              <div
                className={`rotl-node-label absolute top-12 sm:top-14 left-1/2 -translate-x-1/2 whitespace-normal text-center leading-tight w-max max-w-[16ch] sm:max-w-[20ch] px-1 text-[10px] sm:text-xs font-semibold tracking-wide text-white/70 transition-all duration-300 z-0`}
              >
                {item.title}
              </div>
            )}

            {/* Connecting line */}
            {isExpanded && (
              <div
                className="rotl-connecting-line absolute z-40"
                style={{
                  top: '124%',
                  left: '50%',
                  width: '2px',
                  height: '52px',
                  background: 'linear-gradient(rgb(143, 142, 223), transparent)',
                  transform: 'translateX(-50%)',
                  transformOrigin: 'center top',
                }}
              />
            )}

            {/* Floating card */}
            {isExpanded && (
              <div
                className="rotl-card absolute top-24 left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-80 backdrop-blur-lg text-white rounded-lg p-3 sm:p-4 z-[60] shadow-2xl border border-gray-600/50"
                style={{
                  backgroundColor: '#1f1f1f',
                  boxShadow: 'rgba(126, 125, 212, 0.25) 0px 5px 50px -10px',
                }}
                onClick={e => e.stopPropagation()}
              >
                <div className="rotl-card-header flex items-center justify-between mb-2">
                  <span
                    className={`rotl-card-status px-2 py-0.5 rounded-full text-[10px] border ${getStatusClasses(item.status)}`}
                  >
                    {item.status === 'in-progress'
                      ? 'IN PROGRESS'
                      : item.status === 'completed'
                        ? 'COMPLETE'
                        : 'PENDING'}
                  </span>
                </div>
                <div className="rotl-card-title text-sm font-semibold mb-1">{item.title}</div>
                <p className="rotl-card-desc text-xs text-white/80">{item.content}</p>
              </div>
            )}
          </div>
        );
      })}

      {/* Legend */}
      <div className="rotl-legend absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[10px] sm:text-xs text-white/70 bg-white/10 backdrop-blur-md rounded-lg px-3 sm:px-4 py-2 border border-white/20 shadow-lg z-[11]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-orange-400"></div>
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500 border-2 border-gray-400"></div>
          <span>Not Started</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M7.5 9.5C8.1 7.661 8.763 6.9975 10.5 6.5C8.763 6.0025 8.1 5.339 7.5 3.5C6.9 5.339 6.237 6.0025 4.5 6.5C6.237 6.9975 6.9 7.661 7.5 9.5ZM3.5 5C3.8 4.08 4.1315 3.7485 5 3.5C4.1315 3.2515 3.8 2.92 3.5 2C3.2 2.92 2.8685 3.2515 2 3.5C2.8685 3.7485 3.2 4.08 3.5 5ZM4.25 10C4.4 9.54 4.5655 9.3745 5 9.25C4.5655 9.1255 4.4 8.96 4.25 8.5C4.1 8.96 3.9345 9.1255 3.5 9.25C3.9345 9.3745 4.1 9.54 4.25 10Z"
                stroke="white"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>AI Feature</span>
        </div>
      </div>
    </div>
  );
};

export default RadialOrbitalTimeline;
