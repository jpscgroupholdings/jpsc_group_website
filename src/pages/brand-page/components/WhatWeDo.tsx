import { useInView } from "../hooks/useInView";
import { PhotoBlock } from "./PhotoBlock";

// ── WHAT WE DO ────────────────────────────────────────────────────
export function WhatWeDo() {
  const [ref, inView] = useInView();

  const indexItems = [
    "Brand Story",
    "Menu Highlights",
    "Dining Experience",
    "Expansion Plan",
    "Franchise Opp.",
  ];

  const menuItems = [
    "Signature Chicken Inasal",
    "Pork BBQ Skewers",
    "Liempo & Chops",
    "Java Rice & Garlic Rice",
    "Sinigang Soup",
    "Pecho",
  ];

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?q=80&w=900&auto=format&fit=crop",
      label: "Inasal",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop",
      label: "Grill",
    },
    {
      src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=900&auto=format&fit=crop",
      label: "BBQ",
    },
    {
      src: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?q=80&w=900&auto=format&fit=crop",
      label: "Sides",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-brand-accent-50 px-6 py-20 md:px-10 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-brand-accent-800">
              02 · What We Do
            </p>

            <h2
              className={`font-serif text-[clamp(38px,8vw,64px)] font-black leading-none transition-all delay-75 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              WHAT WE
              <br />
              SERVE?
            </h2>
          </div>

          <p
            className={`max-w-md pt-0 text-sm leading-[1.9] text-brand-primary-700 transition-opacity delay-75 ease-in md:max-w-xs md:pt-5 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            We serve <strong>authentic Filipino inasal</strong> —
            slow-marinated, wood-fired chicken — alongside sizzling BBQ cuts and
            timeless comfort sides. Every dish carries the warmth of Filipino
            hospitality.
          </p>
        </div>

        {/* Body */}
        <div className="grid gap-10 lg:grid-cols-[12rem_1fr_14rem] lg:gap-8">
          {/* Index list */}
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-brand-primary-800">
              Index
            </p>

            <div>
              {indexItems.map((item, i) => (
                <p
                  key={item}
                  className={`text-xs leading-[2.4] ${
                    i === 2
                      ? "font-bold text-brand-primary-500"
                      : "font-normal text-brand-primary-500/60"
                  }`}
                >
                  0{i + 1}. &nbsp;{item}
                </p>
              ))}
            </div>

            <div className="my-5 h-px bg-brand-accent-500" />
            <div className="h-4 w-4 rounded-full bg-[#8B2E2E]" />
          </div>

          {/* Photo grid */}
          <div className="grid min-h-[360px] grid-cols-1 gap-2 sm:grid-cols-2">
            {photos.map((photo) => (
              <PhotoBlock key={photo.label} {...photo} />
            ))}
          </div>

          {/* Checklist */}
          <div className="pt-0 text-xs leading-[2.5] text-[#6a5a4a] lg:pt-2">
            {menuItems.map((item) => (
              <div key={item} className="flex gap-2">
                <span>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}