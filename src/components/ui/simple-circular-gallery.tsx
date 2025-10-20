import React, { useRef, useEffect, useState } from 'react';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  description: string;
}

interface SimpleCircularGalleryProps {
  items?: TeamMember[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
}

const SimpleCircularGallery = ({
  items = [],
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
}: SimpleCircularGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScroll, setStartScroll] = useState(0);

  const defaultItems: TeamMember[] = [
    {
      image: `https://picsum.photos/seed/1/400/300?grayscale`,
      name: 'Dr. Sarah Johnson',
      role: 'CEO & Co-Founder',
      description:
        'Leading AI research with 15+ years experience in machine learning and academic publishing.',
    },
    {
      image: `https://picsum.photos/seed/2/400/300?grayscale`,
      name: 'Dr. Michael Chen',
      role: 'CTO & Co-Founder',
      description:
        'Expert in distributed systems and research automation with PhD in Computer Science.',
    },
    {
      image: `https://picsum.photos/seed/3/400/300?grayscale`,
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Research',
      description: 'Specialist in systematic reviews and meta-analysis with 200+ published papers.',
    },
    {
      image: `https://picsum.photos/seed/4/400/300?grayscale`,
      name: 'Dr. James Wilson',
      role: 'Lead Data Scientist',
      description: 'Expert in NLP and knowledge extraction from academic literature.',
    },
    {
      image: `https://picsum.photos/seed/5/400/300?grayscale`,
      name: 'Dr. Lisa Thompson',
      role: 'Head of Product',
      description: 'UX researcher with focus on academic workflows and collaboration tools.',
    },
    {
      image: `https://picsum.photos/seed/6/400/300?grayscale`,
      name: 'Dr. Robert Kim',
      role: 'Senior ML Engineer',
      description: 'Specialist in transformer models and automated literature analysis.',
    },
    {
      image: `https://picsum.photos/seed/7/400/300?grayscale`,
      name: 'Dr. Maria Garcia',
      role: 'Research Director',
      description: 'Expert in bibliometrics and research impact measurement.',
    },
    {
      image: `https://picsum.photos/seed/8/400/300?grayscale`,
      name: 'Dr. David Lee',
      role: 'Head of Engineering',
      description: 'Full-stack developer with expertise in scalable research platforms.',
    },
    {
      image: `https://picsum.photos/seed/9/400/300?grayscale`,
      name: 'Dr. Anna Patel',
      role: 'Lead UX Designer',
      description: 'Design researcher focused on academic user experience and interface design.',
    },
    {
      image: `https://picsum.photos/seed/10/400/300?grayscale`,
      name: 'Dr. Thomas Brown',
      role: 'Head of Operations',
      description:
        'Operations expert with background in academic administration and project management.',
    },
  ];

  const teamMembers = items.length > 0 ? items : defaultItems;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartScroll(scrollPosition);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const newScroll = startScroll + deltaX * 0.5;
    setScrollPosition(newScroll);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartScroll(scrollPosition);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const newScroll = startScroll + deltaX * 0.5;
    setScrollPosition(newScroll);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full items-center"
        style={{
          transform: `translateX(${scrollPosition}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 w-80 h-96 flex flex-col items-center justify-center"
            style={{
              transform: `translateY(${Math.sin((index * 2 * Math.PI) / teamMembers.length + scrollPosition * 0.01) * bend * 20}px)`,
            }}
          >
            <div className="bg-gray-800 rounded-lg p-6 w-full h-full flex flex-col items-center justify-center border border-gray-700">
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-white mb-2 text-center">{member.name}</h3>

              {/* Role */}
              <p className="text-sm text-gray-300 mb-3 text-center">{member.role}</p>

              {/* Description */}
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCircularGallery;
