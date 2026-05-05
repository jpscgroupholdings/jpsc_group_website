import { FadeUp } from "../components/FadeUp";

export interface VentureBrand {
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
export const UPCOMING : VentureBrand[] = [
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

// ── HERO ──────────────────────────────────────────────────────────
export function Hero() {
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