import SectionHero from "@/components/SectionHero";
import { useState, useEffect, useRef } from "react";

interface SubsidariesType {
  id: number;
  title: string;
  tagline: string;
  services: string[];
  description: string;
  image: string;
}

const subsidiaries: SubsidariesType[] = [
  {
    id: 1,
    title: "Consulting & Advisory",
    tagline: "Strategic Intelligence. Structural Precision.",
    services: ["Business Structuring", "Process Optimization"],
    description:
      "We architect the backbone of high-performing organizations. From governance frameworks to operational blueprints, our advisory arm transforms complexity into clarity — giving enterprises the structural integrity to scale with confidence.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&fit=crop",
  },
  {
    id: 2,
    title: "Technology & Digital Systems",
    tagline: "Infrastructure That Moves at Business Speed.",
    services: ["IT Infrastructure", "Digital Transformation"],
    description:
      "Modern business runs on resilient technology. We design, deploy, and optimize digital ecosystems — from cloud-native infrastructure to enterprise-wide transformation programs that position organizations ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&fit=crop",
  },
  {
    id: 3,
    title: "Marketing & Media Services",
    tagline: "Brands That Command Attention.",
    services: ["Branding", "Digital Campaigns"],
    description:
      "Identity is currency. We craft compelling brand narratives and execute high-impact digital campaigns that convert audiences into advocates — blending strategic creativity with data-driven precision across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80&fit=crop",
  },
  {
    id: 4,
    title: "Food Innovation & Restaurant Operations",
    tagline: "Where Culinary Vision Meets Operational Excellence.",
    services: ["Restaurant Systems", "Franchise Development"],
    description:
      "From concept to kitchen to consumer, we engineer food businesses for longevity. Our team brings together culinary innovation, operational rigor, and franchise-ready systems that scale without sacrificing quality.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80&fit=crop",
  },
  {
    id: 5,
    title: "International Business & Expansion",
    tagline: "Cross-Border. Cross-Culture. Cross-Industry.",
    services: ["Cross-Border Operations", "Strategic Partnerships"],
    description:
      "Global markets demand local mastery. We facilitate international market entry, regulatory navigation, and strategic alliance-building — turning geographic ambition into sustainable, cross-border revenue streams.",
    image:
      "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=1400&q=80&fit=crop",
  },
  {
    id: 6,
    title: "Franchise Opportunities",
    tagline: "Invest in Proven Systems. Scale with Confidence.",
    services: ["Funding Rounds", "Investor Announcements"],
    description:
      "We open pathways for capital and ambition to converge. Whether you're an investor seeking scalable opportunity or an entrepreneur ready to own a proven model, our franchise division connects vision with structured growth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&fit=crop",
  },
];

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function SubsidiaryCard({
  item,
  index,
}: {
  item: SubsidariesType;
  index: number;
}) {
  const { ref, visible } = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <section
      id={`section-${item.id}`}
      ref={ref}
      className="relative min-h-[70vh] flex flex-col md:flex-row max-w-[90rem] mx-auto mt-12"
    >
      {/* Image panel */}
      <div
        className={`relative ${isEven ? "md:order-1" : "md:order-2"} w-full md:w-1/2 min-h-[50vh] md:min-h-[70vh] overflow-hidden place-self-center`}
      >
        <img
          src={item.image}
          alt={item.title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
            visible ? "scale-100" : "scale-105"
          } delay-150`}
          style={{ filter: "saturate(0.75)" }}
        />
      </div>

      {/* Content panel */}
      <div
        className={`relative ${
          isEven ? "md:order-2" : "md:order-1"
        } w-full md:w-1/2 min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 md:py-0`}
      >
        {/* Accent line */}
        <div
          className={`transition-all duration-700 bg-brand-accent-500 h-[2px] mb-6 delay-200 ${visible ? "w-12" : "w-0"}`}
        />

        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} delay-300`}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3 text-brand-accent-500 font-bold">
            Subsidiary {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-3">
            {item.title}
          </h2>
          <p className="text-sm font-light mb-6 italic text-brand-accent-500">
            {item.tagline}
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md">
            {item.description}
          </p>

          {/* Services */}
          <div className="flex flex-wrap gap-3 mb-10">
            {item.services.map((svc) => (
              <span
                key={svc}
                className="text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 text-brand-primary-500 border-brand-primary-500"
              >
                {svc}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase transition-all duration-200 text-brand-accent-500">
            <span>Learn More</span>
            <span className="h-px transition-all duration-300 w-8 bg-brand-accent-500" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  const { ref, visible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className="relative py-32 flex flex-col items-center justify-center overflow-hidden mt-12 bg-brand-primary-900"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,155,73,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,155,73,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className={`relative z-10 text-center px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-xs tracking-[0.3em] uppercase mb-5 text-brand-accent-500">
          Join the Group
        </p>
        <h2 className="text-4xl md:text-6xl font-light mb-6 max-w-2xl mx-auto leading-tight text-white font-serif">
          Ready to build{" "}
          <span className="italic text-brand-accent-500">something</span> that
          lasts?
        </h2>
        <p className="text-base font-light mb-12 max-w-md mx-auto text-gray-300">
          Whether you're an investor, partner, or entrepreneur — there's a place
          for you within our ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-200 bg-brand-accent-500 text-brand-primary-500 font-semibold hover:bg-brand-accent-600">
            Get in Touch
          </button>
          <button className="px-8 py-4 text-xs tracking-[0.2em] uppercase border transition-all duration-200 text-brand-primary-400 border-brand-primary-700 hover:border-brand-accent-500 hover:text-brand-accent-500">
            Download Deck
          </button>
        </div>
      </div>
    </section>
  );
}

export default function BusinessPortfolio() {
  return (
    <div className="min-h-screen font-sans text-brand-primary-500 scroll-mt-32">
      <SectionHero
        label="Business Portfolio"
        title="Our Strategic Business Divisions"
        description="A diversified portfolio across consulting, technology, media, food
        operations, and international expansion—structured to build scalable
        businesses and long-term market value."
      />

      {subsidiaries.map((item, i) => (
        <div key={item.id}>
          <SubsidiaryCard item={item} index={i} />
          {i < subsidiaries.length - 1 && (
            <div
              className="w-full h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          )}
        </div>
      ))}

      <ClosingCTA />
    </div>
  );
}
