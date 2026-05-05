import { useState, useEffect, useRef, MutableRefObject, CSSProperties } from "react";

// ── HOOK ─────────────────────────────────────────────────────────
function useInView(options: IntersectionObserverInit = {}) : [MutableRefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.12, ...options },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function FadeUp({ children, delay = 0, className = "", style = {} } : {children : React.ReactNode, delay?: number, className?: string, style?: CSSProperties}) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface VentureBrand {
  index: string;
  codename: string;
  category: string;
  concept: string;
  stage: string;
  target: string;
  accent: string;
  bg: string;
  dark?: boolean;
}

// ── DATA ──────────────────────────────────────────────────────────
const UPCOMING : VentureBrand[] = [
  {
    index: "01",
    codename: "PROJECT EMBER",
    category: "Food & Beverage",
    concept:
      "A fast-casual concept centered on Filipino comfort food reimagined for the modern diner. Think sinigang bowls, kare-kare tacos, and adobo rice plates.",
    stage: "Incubation",
    target: "2026",
    accent: "#C8A87A",
    bg: "#EDE8E0",
  },
  {
    index: "02",
    codename: "PROJECT KANTO",
    category: "Street Food & Retail",
    concept:
      "A curated street food market brand bringing Filipino sidewalk favorites into a clean, scalable retail format. Fishball, kwek-kwek, and more — elevated.",
    stage: "Concept",
    target: "2027",
    accent: "#ef4501",
    bg: "#1C1C1A",
    dark: true,
  },
  {
    index: "03",
    codename: "PROJECT LUTO",
    category: "Cloud Kitchen",
    concept:
      "A delivery-first ghost kitchen brand running multiple menu verticals under one roof — optimized for GrabFood and Foodpanda dominance.",
    stage: "Research",
    target: "2027",
    accent: "#C8A87A",
    bg: "#EDE8E0",
  },
];

const INCUBATION_STAGES = [
  {
    num: "01",
    label: "Research",
    desc: "Market validation, competitive mapping, unit economics.",
  },
  {
    num: "02",
    label: "Concept",
    desc: "Brand identity, menu development, customer persona work.",
  },
  {
    num: "03",
    label: "Incubation",
    desc: "Prototype testing, pilot operations, systems build-out.",
  },
  {
    num: "04",
    label: "Launch",
    desc: "Full rollout with franchise or company-owned model.",
  },
];

// ── HERO ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-24 pb-16 px-14 bg-[#F5F0EB]">
      {/* Top breadcrumb */}
      <div className="flex items-center justify-between">
        <p className="text-[9px] tracking-[0.3em] uppercase text-brand-accent-600">
          Harrison Group · Our Brands · Future
        </p>
        <p className="text-[9px] tracking-[0.3em] uppercase text-brand-accent-600">
          {UPCOMING.length} Ventures in Pipeline
        </p>
      </div>

      {/* Center block */}
      <div className="flex items-end gap-16 my-auto py-16">
        <FadeUp className="flex-1">
          <h1 className="font-serif text-[clamp(53px,7vw,110px)] font-black leading-[0.95] text-brand-primary-900">
            FUTURE
            <br />
            <span className="text-[#ef4501]">BRANDS</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.15} className="max-w-sm pb-3">
          <p className="text-sm leading-[1.95] text-brand-accent-600 mb-7">
            The Harrison Group doesn't stop at one brand. These are the ventures
            currently in research, concept, and incubation — built to carry the
            same DNA of quality, culture, and community.
          </p>
          <div className="h-px bg-[#ef4501] mb-6" />
          <div className="flex gap-10">
            {["Research", "Concept", "Incubation"].map((s) => (
              <div key={s}>
                <p className="text-[9px] tracking-[0.3em] uppercase text-brand-primary-600">
                  {s}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Bottom rule + scroll hint */}
      <div className="flex items-center justify-between">
        <div className="h-px bg-brand-primary-500 flex-1 mr-6" />
        <p className="text-[9px] tracking-[0.25em] uppercase text-brand-primary-500 shrink-0">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}

// ── VENTURE CARD (full-width alternating) ─────────────────────────
function VentureCard({
  brand,
  i,
}: {
  brand: VentureBrand;
  i: number;
}) {
  const isEven = i % 2 === 0;

  return (
    <FadeUp delay={0.05}>
      <div
        className={`
          group flex min-h-[420px] flex-col overflow-hidden
          lg:flex-row
          ${!isEven ? "lg:flex-row-reverse" : ""}
        `}
        style={{ background: brand.bg }}
      >
        {/* Visual block */}
        <div className="relative flex min-h-[280px] w-full shrink-0 items-end overflow-hidden p-7 md:p-9 lg:w-[42%]">
          {/* Big index number */}
          <span
            className="absolute left-6 top-5 select-none font-serif text-[clamp(100px,14vw,180px)] font-black leading-none"
            style={{
              color: brand.dark
                ? "rgba(245,240,235,0.06)"
                : "rgba(28,28,26,0.07)",
            }}
          >
            {brand.index}
          </span>

          {/* Stage badge */}
          <div
            className="absolute right-6 top-6 px-3.5 py-1.5 md:right-8 md:top-8"
            style={{ background: brand.accent }}
          >
            <p
              className={`text-[9px] uppercase tracking-[0.25em] ${
                brand.dark ? "text-brand-primary-900" : "text-brand-accent-50"
              }`}
            >
              {brand.stage}
            </p>
          </div>

          {/* Codename */}
          <div className="relative z-10">
            <p
              className="mb-2.5 text-[9px] uppercase tracking-[0.3em]"
              style={{ color: brand.accent }}
            >
              {brand.category}
            </p>

            <h2
              className={`
                font-serif text-[clamp(26px,3vw,42px)] font-black leading-[1.1]
                transition-[letter-spacing] duration-300 ease-in
                group-hover:tracking-[0.04em]
                ${brand.dark ? "text-brand-accent-50" : "text-brand-primary-900"}
              `}
            >
              {brand.codename}
            </h2>
          </div>
        </div>

        {/* Divider line */}
        <div
          className={`
            h-px w-full shrink-0 lg:h-auto lg:w-px
            ${brand.dark ? "bg-brand-primary-700" : "bg-brand-accent-300"}
          `}
        />

        {/* Text block */}
        <div className="flex flex-1 flex-col justify-between gap-14 px-7 py-9 md:px-11">
          <div>
            <p
              className={`
                mb-5 text-[9px] uppercase tracking-[0.3em]
                ${brand.dark ? "text-brand-accent-700" : "text-brand-accent-600"}
              `}
            >
              Concept Overview
            </p>

            <p
              className={`
                max-w-[480px] text-sm leading-[1.95]
                ${brand.dark ? "text-brand-accent-400" : "text-brand-primary-700"}
              `}
            >
              {brand.concept}
            </p>
          </div>

          <div>
            <div
              className={`
                mb-6 h-px
                ${brand.dark ? "bg-brand-primary-700" : "bg-brand-accent-300"}
              `}
            />

            <div className="flex items-end justify-between gap-6">
              <div>
                <p
                  className={`
                    mb-1.5 text-[9px] uppercase tracking-[0.25em]
                    ${brand.dark ? "text-brand-accent-800" : "text-brand-accent-600"}
                  `}
                >
                  Target Launch
                </p>

                <p
                  className={`
                    font-serif text-[28px] font-bold
                    ${brand.dark ? "text-brand-accent-50" : "text-brand-primary-900"}
                  `}
                >
                  {brand.target}
                </p>
              </div>

              <div
                className="flex h-10 w-10 cursor-default items-center justify-center border transition-colors duration-300 bg-transparent"
                style={{
                  borderColor: brand.accent,
                }}
              >
                <svg
                  className="transition-colors duration-300"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2 7H12M8 3L12 7L8 11"
                    stroke={brand.accent}
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

// ── VENTURES LIST ─────────────────────────────────────────────────
function Ventures() {
  return (
    <section>
      <div className="border border-brand-accent-100 bg-brand-accent-50 px-6 py-10 md:px-10 lg:px-14 lg:py-12">
        <FadeUp>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-[9px] uppercase tracking-[0.3em] text-brand-accent-500">
              02 · Upcoming Ventures
            </p>

            <div className="hidden h-px flex-1 bg-brand-accent-300 sm:block" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-brand-accent-400">
              Placeholder Brands
            </p>
          </div>
        </FadeUp>
      </div>

      <div className="flex flex-col gap-px bg-brand-accent-300">
        {UPCOMING.map((brand, i) => (
          <VentureCard key={brand.index} brand={brand} i={i} />
        ))}
      </div>
    </section>
  );
}

function IncubationProcess() {
  return (
    <section className="py-24 px-14 bg-brand-primary-900">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#6a5a4a] mb-3.5">
            03 · How We Build Brands
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(36px,4vw,60px)] font-black leading-none text-[#F5F0EB] mb-14">
            THE INCUBATION
            <br />
            <span className="text-brand-accent-500">PROCESS</span>
          </h2>
        </FadeUp>
 
        <div className="grid grid-cols-4 gap-px bg-[#2a2520] border border-[#2a2520]">
          {INCUBATION_STAGES.map(({ num, label, desc }, i) => (
            <FadeUp key={num} delay={i * 0.1}>
              <div className="bg-[#1C1C1A] p-7 h-full relative">
                {i === 2 && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-accent-500" />
                )}
                <p className="text-[9px] tracking-[0.3em] uppercase text-brand-accent-500 mb-[18px]">
                  Stage {num}
                </p>
                <p className="font-['Playfair_Display'] text-[22px] font-bold text-[#F5F0EB] mb-3.5">
                  {label}
                </p>
                <div className="h-px bg-[#2a2520] mb-4" />
                <p className="text-xs text-[#6a5a4a] leading-[1.9]">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
 
        <FadeUp delay={0.2}>
          <div className="flex items-start gap-4 mt-10">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-brand-accent-500" />
            <p className="text-xs text-[#4a3a2a] leading-[1.9]">
              Each brand in the Harrison Group pipeline goes through a rigorous
              incubation process before launch — ensuring every concept is
              operationally sound, financially viable, and culturally resonant.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
 
// ── PITCH CTA ─────────────────────────────────────────────────────
function PitchCTA() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="py-24 px-14 bg-[#EDE8E0]">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#9a7c5c] mb-3.5">
            04 · Collaborate
          </p>
        </FadeUp>
 
        <div className="flex items-end justify-between gap-12">
          <FadeUp className="flex-1">
            <h2 className="font-['Playfair_Display'] text-[clamp(36px,4.5vw,68px)] font-black leading-none text-[#1C1C1A]">
              HAVE A<br />BRAND<br />
              <span className="text-[#ef4501]">IDEA ?</span>
            </h2>
          </FadeUp>
 
          <FadeUp delay={0.15} className="flex-1 max-w-[400px]">
            <p className="text-[13px] leading-[1.95] text-[#7a6a58] mb-8">
              The Harrison Group is open to co-developing concepts with
              passionate founders. If you have a food or lifestyle brand idea
              that aligns with Filipino culture and community, let's talk.
            </p>
            <div className="h-px bg-[#D0C4B4] mb-8" />
            <div
              className="flex items-center justify-between cursor-default p-5 px-7 transition-colors duration-300"
              style={{ background: hovered ? "#ef4501" : "#1C1C1A" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0EB]">
                Submit a Brand Pitch
              </p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M12 6L16 10L12 14"
                  stroke="#F5F0EB"
                  strokeWidth="1.2"
                  className="transition-transform duration-300"
                  style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}
                />
              </svg>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
 
// ── ROOT ──────────────────────────────────────────────────────────
export default function FutureBrandsPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* <Nav /> */}
      <Hero />
      <Ventures />
      <IncubationProcess />
      <PitchCTA />
    </div>
  );
}
