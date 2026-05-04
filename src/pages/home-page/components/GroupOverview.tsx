// ─── Types ────────────────────────────────────────────────────────────────────

interface Subsidiary {
  tag: string;
  industry: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  accentColor: string;
  href: string;
}

const subsidiaries: Subsidiary[] = [
  {
    tag: "Banking",
    industry: "Financial Services",
    name: "JPSC Bank & Financial Services",
    description:
      "Providing secure deposits, lending, and payment solutions to individuals and businesses — built on trust and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80&fit=crop",
    alt: "Banking services",
    accentColor: "#174674",
    href: "/subsidiaries/banking",
  },
  {
    tag: "Technology",
    industry: "Information Technology",
    name: "JPSC IT Solutions",
    description:
      "End-to-end technology services — from custom software development to infrastructure management — empowering businesses to grow digitally.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop",
    alt: "IT solutions team",
    accentColor: "#0f6e56",
    href: "/subsidiaries/technology",
  },
  {
    tag: "Consulting",
    industry: "Management Consulting",
    name: "JPSC Consulting Group",
    description:
      "Strategic advisory services helping organizations navigate change, improve operations, and unlock sustainable growth through expert guidance.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop",
    alt: "Consulting team",
    accentColor: "#854f0b",
    href: "/subsidiaries/consulting",
  },
  {
    tag: "Restaurant",
    industry: "Food & Hospitality",
    name: "JPSC Restaurant Group",
    description:
      "A growing chain of dining concepts rooted in Filipino flavors, local sourcing, and warm hospitality — serving communities one plate at a time.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop",
    alt: "Restaurant dining",
    accentColor: "#993c1d",
    href: "/subsidiaries/restaurant",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GroupOverview() {
  return (
    <section id="company-overview" className="px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[90rem] space-y-12">

        {/* ── Header ── */}
        <div>
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-[#174674]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#174674]">
             Group Overview
            </span>
          </div>

          <div className="space-y-8">
            {/* Heading */}
            <h2 className="font-playfair text-4xl font-bold leading-[1.15] text-[#0d2d4a] lg:text-5xl">
              One group,{" "}
              <em className="font-normal italic text-[#174674]">
                many strengths.
              </em>
            </h2>

            {/* Right: description + stats strip */}
            <div className="flex flex-col gap-5">
              <p className="text-sm leading-[1.85] text-slate-500">
                JPSC Holdings is a diversified group of companies built on
                years of trust, service, and innovation — operating across
                four industries that touch everyday Filipino life.
              </p>
            </div>
          </div>
        </div>

        {/* ── Subsidiary Cards Grid ── */}
        <div className="grid gap-5 sm:grid-cols-4">
          {subsidiaries.map((sub) => (
            <a
              key={sub.name}
              href={sub.href}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(23,70,116,0.12)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <img
                  src={sub.image}
                  alt={sub.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-[#0d2d4a]/18" />

                {/* Accent pill — top left */}
                <div className={`absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1.5 bg-brand-primary-50`}
                >
                  <span
                    className="h-2 w-2 rounded-full bg-white"
                    style={{ backgroundColor: sub.accentColor }}
                  />
                  <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#0d2d4a]">
                    {sub.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-[9.5px] font-medium uppercase tracking-[0.12em] text-[#174674]">
                  {sub.industry}
                </p>
                <h3 className="font-playfair text-[1.15rem] font-bold leading-snug text-[#0d2d4a]">
                  {sub.name}
                </h3>
                <p className="flex-1 text-[12.5px] leading-[1.75] text-slate-500">
                  {sub.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}