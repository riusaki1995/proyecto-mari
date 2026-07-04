import { useEffect, useRef, useState } from 'react';
import { TimelineItem } from '../../data/moduleDetails/types';

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          setProgress(0);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frameId = 0;
    const startTime = performance.now();
    const duration = 2400;

    const animate = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      setProgress(easeOutCubic(t));
      if (t < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [started]);

  const visibleCount = Math.ceil(progress * items.length);

  return (
    <div ref={containerRef} className="relative space-y-0">
      <div
        className="absolute bottom-3 left-[5px] top-3 w-px origin-top bg-gradient-to-b from-violet-400 to-blue-400 transition-none"
        style={{
          transform: `scaleY(${progress})`,
        }}
      />

      {items.map((item, i) => {
        const isVisible = i < visibleCount;
        const isActive = i === visibleCount - 1 && progress < 1;

        return (
          <div
            key={item.time}
            className={`relative flex gap-4 transition-opacity duration-300 ${
              isVisible ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`flex h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 ${
                  isActive ? 'ring-4 ring-violet-200' : ''
                }`}
              />
            </div>
            <div className={`pb-5 pt-0 ${i === items.length - 1 ? 'pb-0' : ''}`}>
              <span className="text-sm font-semibold text-gray-900">{item.time}: </span>
              <span className="text-sm text-gray-600">{item.text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
