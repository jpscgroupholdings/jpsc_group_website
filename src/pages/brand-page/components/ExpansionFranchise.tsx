import { FadeUp } from "./FadeUp";

// ── EXPANSION + FRANCHISE ─────────────────────────────────────────
const phases = [
  {
    num: "01",
    title: "Flagship",
    desc: "Establish the first Harrison House. Refine operations, recipes, and brand identity on the ground.",
    bg: "#F5F0EB",
  },
  {
    num: "02",
    title: "City Roll-out",
    desc: "Open 3–5 branches across Metro Manila, targeting high-traffic food corridors and malls.",
    bg: "#EDE8E0",
  },
  {
    num: "03",
    title: "Nationwide",
    desc: "Launch franchise model — partnering with operators across Visayas, Mindanao & Luzon.",
    bg: "#F5F0EB",
  },
];

const franchisePerks = [
  {
    title: "Turnkey Package",
    desc: "Full setup support — location scouting, fit-out, equipment, and staff training included.",
  },
  {
    title: "Operations Manual",
    desc: "Tested SOPs covering every aspect of kitchen, service, and inventory management.",
  },
  {
    title: "Ongoing Support",
    desc: "Dedicated franchise relations team and quarterly business reviews for all partners.",
  },
];

export function ExpansionFranchise() {
  return (
    <section className="bg-[#F5F0EB] px-6 py-20 md:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent-800">
            05 · Growth
          </p>

          <h2 className="mb-4 font-serif text-[clamp(38px,8vw,62px)] font-black leading-none text-brand-primary-900">
            EXPANSION
            <br />
            PLAN
          </h2>
        </FadeUp>

        <div className="mb-14 flex items-end justify-between">
          <div />

          <FadeUp>
            <p className="max-w-xs text-xs leading-[1.9] text-brand-accent-600">
              Scaling with intention — from one beloved location to a household
              name across the Philippines.
            </p>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="mb-14 grid border border-brand-accent-600/80 md:grid-cols-3">
          {phases.map(({ num, title, desc, bg }, i) => (
            <FadeUp key={num} delay={i * 0.1}>
              <div
                className={`h-full px-7 py-8 ${
                  i < phases.length - 1
                    ? "border-b border-[#D0C4B4] md:border-b-0 md:border-r"
                    : ""
                }`}
                style={{ background: bg }}
              >
                <p className="mb-2.5 text-[9px] uppercase tracking-[0.3em] text-[#8B2E2E]">
                  Phase {num}
                </p>

                <p className="mb-2.5 font-serif text-[26px] font-bold text-brand-primary-900">
                  {title}
                </p>

                <p className="text-xs leading-[1.9] text-[#7a6a58]">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Franchise */}
        <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
          {/* Dark card */}
          <FadeUp>
            <div className="h-full bg-brand-primary-900 px-7 py-9 md:px-9 md:py-10">
              <p className="mb-3.5 text-[9px] uppercase tracking-[0.3em] text-brand-accent-400">
                07 · Franchise Opportunities
              </p>

              <h3 className="mb-6 font-serif text-[clamp(26px,6vw,38px)] font-black leading-[1.1] text-white">
                FRANCHISE
                <br />
                WITH
                <br />
                <span className="text-brand-accent-500">HARRISON</span>
              </h3>

              <div className="mb-7 h-px bg-brand-primary-700" />

              <div className="flex flex-col gap-6">
                {franchisePerks.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="border-l border-brand-accent-500/40 pl-4"
                  >
                    <p className="mb-1 text-sm font-semibold text-white">
                      {title}
                    </p>

                    <p className="text-xs leading-[1.9] text-brand-accent-200">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right photo stack */}
          <div className="flex flex-col gap-1">
            <div className="relative min-h-[180px] flex-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop"
                alt="Partnership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/80">
                Partnership
              </p>
            </div>

            <div className="relative min-h-[180px] flex-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop"
                alt="Growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/80">
                Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}