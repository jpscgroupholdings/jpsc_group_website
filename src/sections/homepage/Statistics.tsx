import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "3", suffix: "+", label: "Years of Legacy" },
  { value: "34", suffix: "K", label: "Assets Under Management" },
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

  const counts = [
    useCountUp(3, 1000, visible),
    useCountUp(34, 1600, visible),
    useCountUp(20, 1400, visible),
    useCountUp(500, 2000, visible),
  ];

  return (
    <section ref={ref} className="bg-white py-24 px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-6xl mx-auto">
        {STATS.map((s, i) => (
          <div key={s.label} className={`text-center py-10 px-6`}>
            <div className="font-serif text-8xl font-light text-amber-500 mb-1">
              {counts[i]}
              <span style={{ fontSize: "0.5em", verticalAlign: "super" }}>
                {s.suffix}
              </span>
            </div>
            <p className="font-serif text-sm uppercase text-amber-400 m-0">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
