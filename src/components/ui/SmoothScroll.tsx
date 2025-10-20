import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useLocation } from 'react-router-dom';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    // Clean up existing instance
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.destroy();
    }

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      scrollbarContainer: false,
      lerp: 0.1,
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
  }, [location.pathname]); // Re-initialize when route changes

  // Update Locomotive Scroll when content changes
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
    }
  }, [children]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
