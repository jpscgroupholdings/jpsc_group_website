import { FadeUp } from "../components/FadeUp";

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


export function IncubationProcess() {
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