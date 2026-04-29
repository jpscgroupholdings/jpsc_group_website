import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "3", suffix: "+", label: "Years of Legacy" },
  { value: "10", suffix: "K", label: "Assets Under Management" },
  { value: "4", suffix: "+", label: "Local Offices" },
  { value: "500", suffix: "+", label: "Projects Delivered" },
];

// ─── Utility hooks ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export const Statistics = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-0 md:py-12 px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-[90rem] mx-auto w-full">
        {STATS.map((s) => (
          <div key={s.label} className={`text-center py-10 px-6 space-y-8`}>
            <p className="text-xs uppercase text-brand-accent-400 m-0">
              {s.label}
            </p>
            <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-brand-accent-500 mb-1">
              {useCountUp(Number(s.value), 1400, visible)}
              <span style={{ fontSize: "0.5em", verticalAlign: "super" }}>
                {s.suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
