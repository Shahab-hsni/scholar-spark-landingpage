'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const ContainerScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    // Set initial state
    if (cardRef.current) {
      gsap.set(cardRef.current, {
        rotateX: 20,
        scale: 1.05,
      });
    }

    const handleScroll = () => {
      console.log('Scroll event fired!');
      const deviceFrame = document.querySelector('.hero-device-frame');
      console.log('Device frame found:', !!deviceFrame);
      if (deviceFrame && cardRef.current) {
        const rect = deviceFrame.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2 + 150;
        console.log('Device frame top:', rect.top, 'Viewport center:', viewportCenter);

        if (rect.top <= viewportCenter) {
          console.log('Triggering animation to straight!');
          gsap.to(cardRef.current, {
            duration: 0.8,
            ease: 'power2.out',
            rotateX: 0,
            scale: 1,
            onComplete: () => {
              console.log('GSAP animation to straight completed');
            },
          });
        } else {
          console.log('Triggering animation to angled!');
          gsap.to(cardRef.current, {
            duration: 0.8,
            ease: 'power2.out',
            rotateX: 20,
            scale: 1.05,
            onComplete: () => {
              console.log('GSAP animation to angled completed');
            },
          });
        }
      }
    };

    // Try multiple approaches to get scroll events
    console.log('Setting up scroll listeners...');

    // Method 1: Try Locomotive Scroll instance
    const locomotiveScroll = (window as any).locomotiveScroll;
    console.log('Locomotive Scroll available:', !!locomotiveScroll);

    if (locomotiveScroll && locomotiveScroll.scroll) {
      console.log('Using Locomotive Scroll instance');
      locomotiveScroll.scroll.on('scroll', handleScroll);
    } else {
      console.log('Trying alternative methods...');

      // Method 2: Try wheel events
      window.addEventListener('wheel', handleScroll);

      // Method 3: Try touch events for mobile
      window.addEventListener('touchmove', handleScroll);

      // Method 4: Try both scroll events
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (locomotiveScroll && locomotiveScroll.scroll) {
        locomotiveScroll.scroll.off('scroll', handleScroll);
      } else {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="container-scroll-wrapper flex items-center justify-center relative"
      ref={containerRef}
      style={{ height: 'auto' }}
    >
      <div
        className="container-scroll-inner w-full relative"
        style={{
          perspective: '1000px',
          height: 'auto',
        }}
      >
        <Card cardRef={cardRef}>{children}</Card>
      </div>
    </div>
  );
};

export const Card = ({
  cardRef,
  children,
}: {
  cardRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}) => {
  return (
    <div
      ref={cardRef}
      className="container-scroll-card max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
      style={{
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
    >
      <div className="container-scroll-screen h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl">
        <img
          src="/laptop-frame/app-snapshot.png"
          alt="ScholarSpark App"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
