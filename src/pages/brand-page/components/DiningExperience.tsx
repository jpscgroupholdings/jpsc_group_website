import { FadeUp } from "./FadeUp";
import dining from "../../../assets/dining.png";

// ── DINING EXPERIENCE ─────────────────────────────────────────────
const experiencePoints = [
  {
    title: "Open-Fire Kitchen",
    desc: "Guests see, smell, and hear every dish being made. The grill is the show.",
  },
  {
    title: "Communal Tables",
    desc: "Designed for families and barkadas — long tables that encourage sharing and laughter.",
  },
  {
    title: "Fast & Generous",
    desc: "Quick service without cutting corners — big portions, honest prices, warm staff.",
  },
];

export function DiningExperience() {
  return (
    <section className="bg-brand-accent-100 px-6 py-20 md:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Left photo */}
        <FadeUp>
          <img
            src={dining}
            alt="Harrison House dining experience"
            className="h-[420px] w-full object-contain p-8 sm:h-[500px] lg:h-[560px]"
          />
        </FadeUp>

        {/* Right text */}
        <div>
          <FadeUp>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#ef4501]">
              04 · Dining Experience
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,8vw,58px)] font-black leading-none text-brand-primary-900">
              THE
              <br />
              APPROACH
            </h2>

            <div className="mb-10 h-px bg-brand-primary-900/15" />
          </FadeUp>

          <div className="flex flex-col gap-7">
            {experiencePoints.map(({ title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.12}>
                <div className="group border-l border-[#ef4501]/40 pl-5 transition-colors duration-300 hover:border-[#ef4501]">
                  <p className="mb-2 text-sm font-bold text-brand-primary-900">
                    {title}
                  </p>
                  <p className="max-w-xl text-xs leading-[1.9] text-brand-primary-700/75">
                    {desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="my-10 h-px bg-brand-primary-900/15" />

          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-primary-900/40">
            Harrison House · BBQ & Inasal · Portfolio Project
          </p>
        </div>
      </div>
    </section>
  );
}