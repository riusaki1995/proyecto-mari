import { useEffect, useId, useRef, useState } from 'react';

const PATH =
  'M 0 30 C 80 35, 120 50, 160 70 S 280 100, 360 115 S 520 145, 640 160 S 740 175, 800 185';

const LABELS = ['0s', '30s', '1m', '2m', '5m', '10m', '15m', '20m', '30m', '45m'];
const DURATION_MS = 2800;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function RetentionChart() {
  const gradientId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [dot, setDot] = useState({ x: 0, y: 30 });

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      setPathLength(path.getTotalLength());
    }
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
      if (point) {
        setDot({ x: point.x, y: point.y });
      }

      if (t < 1) {
        frameId = requestAnimationFrame(animate);
      }
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
      <svg viewBox="0 0 800 200" className="h-40 w-full sm:h-48" preserveAspectRatio="none">
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
          style={{ transition: pathLength ? 'none' : undefined }}
        />

        {progress > 0 && (
          <>
            <circle
              cx={dot.x}
              cy={dot.y}
              r="7"
              fill="#a855f7"
              opacity={0.25}
              className="animate-pulse"
            />
            <circle cx={dot.x} cy={dot.y} r="4" fill="#ec4899" stroke="white" strokeWidth="2" />
          </>
        )}
      </svg>

      <div className="mt-2 grid grid-cols-5 gap-0.5 text-[9px] sm:flex sm:justify-between sm:text-xs">
        {LABELS.map((label, index) => (
          <span
            key={label}
            className={`text-center transition-colors duration-300 sm:text-left ${
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
