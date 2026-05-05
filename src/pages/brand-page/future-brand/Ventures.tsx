import { FadeUp } from "../components/FadeUp";
import { UPCOMING, VentureBrand } from "./FutureBrandHero";

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
export function Ventures() {
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