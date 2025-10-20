import * as React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  title?: string;
  headerLeft?: React.ReactNode;
  className?: string;
  itemClassName?: string;
  children: React.ReactNode[] | React.ReactNode;
};

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export const HorizontalScroller = React.forwardRef<HTMLDivElement, Props>(
  ({ title, headerLeft, className, itemClassName, children, ...props }, ref) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScrollability = React.useCallback(() => {
      const el = scrollRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }, []);

    React.useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;
      checkScrollability();
      el.addEventListener('scroll', checkScrollability);
      const resizeObs = new ResizeObserver(checkScrollability);
      resizeObs.observe(el);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        resizeObs.disconnect();
      };
    }, [checkScrollability]);

    const scroll = (dir: 'left' | 'right') => {
      const el = scrollRef.current;
      if (!el) return;
      const amount = el.clientWidth * 0.85;
      el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    };

    const headerClass =
      headerLeft || title
        ? 'flex items-end justify-between px-2 sm:px-4 mb-4'
        : 'flex items-end justify-end px-2 sm:px-4 mb-4';

    return (
      <section ref={ref} className={cn('w-full', className)} {...props}>
        <div className={headerClass}>
          {headerLeft ? (
            <div className="min-w-0">{headerLeft}</div>
          ) : title ? (
            <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
          ) : null}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={cn(
                'p-2 rounded-full border border-white/10 bg-black/40 text-white transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/60 cursor-pointer'
              )}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={cn(
                'p-2 rounded-full border border-white/10 bg-black/40 text-white transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/60 cursor-pointer'
              )}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 px-1 sm:px-2 pb-6 md:pb-8 scrollbar-hide"
        >
          {React.Children.map(children, (child, i) => (
            <div key={i} className={cn('flex-shrink-0 w-[280px] snap-start', itemClassName)}>
              {child}
            </div>
          ))}
        </div>
      </section>
    );
  }
);

HorizontalScroller.displayName = 'HorizontalScroller';
