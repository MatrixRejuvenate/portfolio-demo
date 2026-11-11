import { useEffect, useRef, useState } from 'react';

export function useLocomotiveScroll(enabled: boolean = true) {
  const scrollRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isMounted = true;

    async function initScroll() {
      try {
        const LocomotiveScrollModule = await import('locomotive-scroll');
        const LocomotiveScroll = LocomotiveScrollModule.default;

        if (!isMounted) return;

        scrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
          },
        });

        // Add scroll listener
        const handleScroll = () => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalHeight)));
          }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      } catch (err) {
        console.warn('Locomotive scroll fallback to native smooth scrolling:', err);
      }
    }

    const cleanupPromise = initScroll();

    return () => {
      isMounted = false;
      cleanupPromise.then((cleanup) => cleanup && cleanup());
      if (scrollRef.current && typeof scrollRef.current.destroy === 'function') {
        try {
          scrollRef.current.destroy();
        } catch (e) {
          // ignore cleanup issues
        }
        scrollRef.current = null;
      }
    };
  }, [enabled]);

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    if (scrollRef.current && typeof scrollRef.current.scrollTo === 'function') {
      try {
        scrollRef.current.scrollTo(el, { offset: -70, duration: 1.2 });
        return;
      } catch (e) {
        // fallback to native
      }
    }

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return { containerRef, scrollProgress, scrollToSection };
}
