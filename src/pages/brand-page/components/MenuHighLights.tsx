import { FadeUp } from "./FadeUp";

// ── MENU HIGHLIGHTS ───────────────────────────────────────────────
const menuItems = [
  {
    tag: "Signature",
    gradient: "linear-gradient(135deg,#4a3020,#8a6040)",
    title: "Chicken Inasal",
    desc: "Slow-marinated in sukang iloco, lemongrass & annatto. Char-grilled to perfection.",
    src: "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "BBQ Star",
    gradient: "linear-gradient(135deg,#3a1818,#7a3a2a)",
    title: "Pork BBQ Skewer",
    desc: "Sweet-savory banana ketchup glaze on tender pork belly, flame-kissed to order.",
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Crowd Favorite",
    gradient: "linear-gradient(135deg,#2a2018,#5a4a28)",
    title: "Combo Platter",
    desc: "Best of both worlds — inasal + BBQ with garlic rice, atchara & soy-calamansi dip.",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop",
  },
];

export function MenuHighlights() {
  return (
    <section className="py-24 px-14 bg-brand-primary-900">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[9px] tracking-[0.3em] uppercase text-brand-accent-500">
            03 · Menu Highlights
          </p>
        </FadeUp>
        <div className="flex items-end justify-between mb-14 mt-4">
          <FadeUp>
            <h2 className="font-serif text-[clamp(38px,4vw,62px)] font-black leading-none text-[#ef4501]">
              MENU
              <br />
              HIGHLIGHTS
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="max-w-xs text-xs text-gray-300 leading-[1.9]">
              Carefully curated for taste, tradition, and repeatability. Every
              item designed to make guests come back.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map(({ tag, src, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div
                className={`h-full px-6 py-8 md:px-7 md:py-8 transition-colors duration-300
        ${i < menuItems.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#2a2520]" : ""}`}
              >
                {/* Tag */}
                <p className="mb-3 text-[9px] tracking-[0.3em] uppercase text-brand-accent-500">
                  {tag}
                </p>

                {/* Image */}
                <div className="mb-5 h-[180px] overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Title */}
                <p className="mb-2 font-serif text-[20px] font-bold text-gray-100">
                  {title}
                </p>

                {/* Description */}
                <p className="text-xs leading-[1.9] text-gray-400">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}