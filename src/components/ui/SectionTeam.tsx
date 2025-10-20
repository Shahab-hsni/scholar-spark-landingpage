import { useState, useRef } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace figma:asset imports with regular image URLs. You can later point these
// to files in public/ if you have specific assets.
// Map to your actual public/team-members filenames
const imgOG = '/team-members/Pooya.webp';
const imgUO = '/team-members/Mike.webp';
const imgFE = '/team-members/Shahab.webp';
const img1N = '/team-members/Aya.webp';

const teamData = [
  {
    name: 'Lucas Harris',
    role: 'AI Expert',
    description:
      'Visionary leader passionate about building innovative digital solutions and growing strong teams.',
    image: imgOG,
    imageStyle: { left: '-67.55%', width: '235.1%' } as React.CSSProperties,
  },
  {
    name: 'Peter Johnson',
    role: 'Founder of Etery',
    description:
      'Visionary leader passionate about building innovative digital solutions and growing strong teams.',
    image: imgUO,
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Daniel Lee',
    role: 'Full-Stack Developer',
    description:
      'Visionary leader passionate about building innovative digital solutions and growing strong teams.',
    image: imgFE,
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Sofia Martin',
    role: 'Project Manager',
    description:
      'Visionary leader passionate about building innovative digital solutions and growing strong teams.',
    image: img1N,
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Yu Han',
    role: 'UX Designer',
    description: 'Designs intuitive researcher experiences aligned with our brand and vision.',
    image: '/team-members/Yu Han.webp',
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Caique',
    role: 'Data Scientist',
    description: 'Builds robust evaluation pipelines and turns data into decisions.',
    image: '/team-members/Caique.webp',
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Sri',
    role: 'Research Lead',
    description: 'Guides methodology and ensures scientific rigor across our features.',
    image: '/team-members/Sri.webp',
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Natalia',
    role: 'Backend Engineer',
    description: 'Owns distributed systems and scalable APIs for our platform.',
    image: '/team-members/Natalia.webp',
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Josi',
    role: 'Product Manager',
    description: 'Aligns user needs and business goals into a focused roadmap.',
    image: '/team-members/Josi.webp',
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
  {
    name: 'Bennett',
    role: 'Frontend Engineer',
    description: 'Delivers high-quality UI that is fast, accessible, and consistent.',
    image: '/team-members/Bennett.webp',
    imageStyle: {
      height: '114.32%',
      top: '-7.16%',
      width: '100%',
    } as React.CSSProperties,
  },
];

function BackgroundGradient() {
  return (
    <div
      className="absolute bottom-[3.66%] left-0 opacity-20 right-0 top-[3.34%]"
      data-name="Background Gradient"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1905 709.58\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(95.25 0 0 28.943 952.5 400.91)\\'><stop stop-color=\\'rgba(79,26,214,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(79,26,214,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function Heading2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="capitalize flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-4xl md:text-5xl text-white w-full">
        <p className="leading-tight">Meet Our Team</p>
      </div>
    </div>
  );
}

function HeadingH2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading H2"
    >
      <Heading2 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-normal justify-center leading-relaxed not-italic relative shrink-0 text-gray-300 text-xl w-full">
        <p className="mb-0 max-w-[60vh]">
          World-class researchers and engineers dedicated to revolutionizing academic research
          through AI-powered tools.
        </p>
      </div>
    </div>
  );
}

function TextMain() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-xs relative shrink-0 w-full"
      data-name="Text Main"
    >
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full"
      data-name="Heading"
    >
      <HeadingH2 />
      <div className="max-w-3xl">
        <Container />
      </div>
    </div>
  );
}

function ImgFill({ src, style }: { src: string; style?: React.CSSProperties }) {
  const base = (import.meta as any).env?.BASE_URL || '/';
  const build = (path: string) =>
    path.startsWith('/') ? `${base}${path.replace(/^\//, '')}` : path;
  const [current, setCurrent] = useState(build(src));
  const tried = useRef<Record<string, boolean>>({});

  const onErr = () => {
    // Try common alternative extensions
    const order = ['.jpg', '.jpeg', '.png', '.webp'];
    const idx = order.findIndex(ext => current.endsWith(ext));
    for (let i = 0; i < order.length; i++) {
      const next = build(src.replace(/\.(jpg|jpeg|png|webp)$/i, order[i]));
      if (!tried.current[next]) {
        tried.current[next] = true;
        setCurrent(next);
        return;
      }
    }
  };

  return (
    <div className="tm-img-wrapper absolute left-0 top-0 w-full h-full rounded-[10px]">
      <div className="tm-img-inner absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img
          alt=""
          className="tm-img absolute left-0 top-0 w-full h-full object-cover mix-blend-luminosity transition-[mix-blend-mode] duration-200 group-hover:mix-blend-normal"
          style={{ left: 0, top: 0, width: '100%', height: '100%' }}
          src={current}
          onError={onErr}
        />
      </div>
    </div>
  );
}

function Avatar({ src, style }: { src: string; style?: React.CSSProperties }) {
  return (
    <div className="tm-avatar basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[10px] shrink-0 w-full">
      <ImgFill src={src} style={style} />
    </div>
  );
}

function CardBG({ src, style }: { src: string; style?: React.CSSProperties }) {
  return (
    <div className="tm-bg basis-0 bg-black grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0">
      <div className="tm-bg-inner flex flex-col items-end justify-end overflow-clip rounded-[inherit] size-full">
        <div className="tm-bg-pad box-border content-stretch flex flex-col items-end justify-end p-0 relative size-full">
          <Avatar src={src} style={style} />
        </div>
      </div>
    </div>
  );
}

function Info({
  isExpanded,
  onClick,
  name,
  role,
  description,
}: {
  isExpanded: boolean;
  onClick: () => void;
  name: string;
  role: string;
  description: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState(400);

  // Calculate card height dynamically
  React.useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        const parentCard = cardRef.current.closest('.tm-primary');
        if (parentCard) {
          const rect = parentCard.getBoundingClientRect();
          setCardHeight(rect.height - 16); // Subtract 16px for margins
        }
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return (
    <motion.div
      ref={cardRef}
      className="tm-info absolute z-[2] bg-[#0d0d0d] box-border content-stretch flex flex-col left-[10px] overflow-hidden pl-[20px] pr-[15px] right-[10px] rounded-[12px] cursor-pointer"
      data-name="Info"
      onClick={onClick}
      initial={false}
      animate={{
        top: 'auto',
        bottom: 8,
        height: isExpanded ? cardHeight : 72,
        paddingTop: isExpanded ? 20 : 10,
        paddingBottom: isExpanded ? 20 : 14,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        type: 'tween',
      }}
    >
      <div className="tm-info-footer content-stretch flex gap-[10px] isolate items-end justify-center shrink-0 w-full">
        <div className="tm-info-ident min-h-[56px] basis-0 content-stretch flex flex-col gap-[5.99px] grow items-center justify-center min-w-px overflow-clip relative shrink-0 z-[2]">
          <div className="tm-info-namewrap content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="tm-info-name flex flex-col font-semibold justify-center leading-tight not-italic relative shrink-0 text-lg text-white w-full">
              <p className="tm-name-text">{name}</p>
            </div>
          </div>
          <div className="tm-info-rolewrap content-stretch flex flex-col items-start relative shrink-0 w-full mb-[6px]">
            <div className="tm-info-role flex flex-col font-medium justify-center leading-tight not-italic relative shrink-0 text-sm text-gray-400 uppercase w-full">
              <p className="tm-role-text">{role}</p>
            </div>
          </div>
        </div>
        <div className="tm-info-action bg-[rgba(255,255,255,0.03)] overflow-clip relative rounded-[30px] shrink-0 size-[30px] z-[1] mb-[6px]">
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="tm-plus-h absolute bg-[#b8b8b8] h-[2px] left-[8px] rounded-[10px] w-[14px]" />
            <div className="tm-plus-v absolute bg-[#b8b8b8] h-[14px] left-[14px] rounded-[10px] w-[2px]" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="tm-info-descwrap absolute left-[20px] right-[15px] bottom-[20px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.3,
              delay: 0.15,
              ease: 'easeOut',
            }}
          >
            <div className="tm-info-desc flex flex-col font-normal leading-relaxed not-italic text-gray-300 text-sm w-full">
              <p className="tm-info-desc-text">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Primary({
  isExpanded,
  onClick,
  member,
}: {
  isExpanded: boolean;
  onClick: () => void;
  member: (typeof teamData)[0];
}) {
  return (
    <div
      className="tm-primary h-[425px] relative rounded-[15px] shrink-0 w-full"
      data-name="Primary"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 367.5 425\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(16.17 0 0 17 183.75 90.95)\\'><stop stop-color=\\'rgba(79,26,214,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(63,23,164,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(46,20,114,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(30,16,63,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(21,15,38,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(13,13,13,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div className="tm-primary-outer flex flex-row items-center justify-center size-full">
        <div className="tm-primary-inner group box-border content-stretch flex h-[425px] items-center justify-center p-px relative w-full">
          <CardBG src={member.image} style={member.imageStyle} />
          <div className="tm-border absolute inset-0 rounded-[15px]" data-name="Border">
            <div
              aria-hidden="true"
              className="tm-border-inner absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[15px]"
            />
          </div>
          <Info
            isExpanded={isExpanded}
            onClick={onClick}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        </div>
      </div>
    </div>
  );
}

function TeamCard({
  isExpanded,
  onClick,
  member,
}: {
  isExpanded: boolean;
  onClick: () => void;
  member: (typeof teamData)[0];
}) {
  return (
    <div
      className="tm-card content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Team Card"
    >
      <Primary isExpanded={isExpanded} onClick={onClick} member={member} />
    </div>
  );
}

function Team() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const handleCardClick = (index: number) => setExpandedCard(expandedCard === index ? null : index);
  const members = teamData.slice(0, 10);
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full auto-rows-fr"
      data-name="Team"
    >
      {members.map((member, idx) => (
        <TeamCard
          key={member.name}
          isExpanded={expandedCard === idx}
          onClick={() => handleCardClick(idx)}
          member={member}
        />
      ))}
    </div>
  );
}

import { HorizontalScroller } from './HorizontalScroller';

function ContainerRoot() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const items = teamData.slice(0, 10);
  const toggle = (idx: number) => setExpandedIdx(expandedIdx === idx ? null : idx);
  return (
    <div
      className="content-stretch flex flex-col gap-[50px] items-center justify-center max-w-[1280px] mx-auto relative shrink-0 w-full px-6"
      data-name="Container"
    >
      <HorizontalScroller
        headerLeft={
          <div className="flex flex-col gap-4 items-start">
            <HeadingH2 />
            <div className="max-w-3xl">
              <Container />
            </div>
          </div>
        }
        itemClassName="w-72 sm:w-80 md:w-96 lg:w-[320px] xl:w-[calc((100%-(3*1.5rem))/3.5)]"
      >
        {items.map((member, idx) => (
          <TeamCard
            key={member.name}
            isExpanded={expandedIdx === idx}
            onClick={() => toggle(idx)}
            member={member}
          />
        ))}
      </HorizontalScroller>
    </div>
  );
}

export default function SectionTeam() {
  return (
    <div className="relative size-full" data-name="Section - Section Team">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-6 sm:px-10 md:px-6 py-20 sm:py-24 md:py-32 relative size-full">
          <BackgroundGradient />
          <ContainerRoot />
        </div>
      </div>
    </div>
  );
}
