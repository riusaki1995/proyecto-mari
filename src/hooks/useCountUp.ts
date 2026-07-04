import { useEffect, useState } from 'react';

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target: number, duration = 1800, delay = 0) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (target <= 1) {
      setValue(target);
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const timeoutId = window.setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(1 + (target - 1) * easeOutCubic(progress));

        setValue(current);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [target, duration, delay]);

  return value;
}
