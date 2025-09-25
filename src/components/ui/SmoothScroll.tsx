import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      scrollbarContainer: false,
      lerp: 0.1, // Smoothness factor (0.1 = very smooth, 1 = instant)
      getDirection: true,
      getSpeed: true,
      reloadOnContextChange: true,
    });

    // Update scroll on window resize
    const handleResize = () => {
      locomotiveScrollRef.current?.update();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
