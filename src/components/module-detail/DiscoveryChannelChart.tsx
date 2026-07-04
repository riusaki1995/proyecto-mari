import { useEffect, useId, useRef, useState } from 'react';

const PATH = 'M 0 50 C 120 58, 220 82, 400 108 S 620 142, 720 158, 800 165';

const LABELS = ['Feed For You', 'Siguiendo', 'Pestaña LIVE'];
const DURATION_MS = 2600;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function DiscoveryChannelChart() {
  const gradientId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [dot, setDot] = useState({ x: 0, y: 50 });

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
  }, []);

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
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || pathLength === 0) return;

    let frameId = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const t = Math.min((now - startTime) / DURATION_MS, 1);
      const eased = easeOutCubic(t);
      setProgress(eased);

      const point = pathRef.current?.getPointAtLength(pathLength * eased);
      if (point) setDot({ x: point.x, y: point.y });

      if (t < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [started, pathLength]);

  const activeLabelIndex = Math.min(
    LABELS.length - 1,
    Math.floor(progress * LABELS.length),
  );

  return (
    <div ref={containerRef} className="mt-4 rounded-xl bg-gray-50 p-4 sm:p-6">
      <svg viewBox="0 0 800 180" className="h-36 w-full sm:h-44" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d={PATH}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="4"
          strokeLinecap="round"
          opacity={0.35}
        />

        <path
          d={PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={pathLength || 1000}
          strokeDashoffset={pathLength ? pathLength * (1 - progress) : 1000}
        />

        {progress > 0 && (
          <>
            <circle cx={dot.x} cy={dot.y} r="7" fill="#a855f7" opacity={0.25} className="animate-pulse" />
            <circle cx={dot.x} cy={dot.y} r="4" fill="#ec4899" stroke="white" strokeWidth="2" />
          </>
        )}
      </svg>

      <div className="mt-2 flex justify-between text-[10px] sm:text-xs">
        {LABELS.map((label, index) => (
          <span
            key={label}
            className={`transition-colors duration-300 ${
              index <= activeLabelIndex ? 'font-medium text-violet-600' : 'text-gray-400'
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
