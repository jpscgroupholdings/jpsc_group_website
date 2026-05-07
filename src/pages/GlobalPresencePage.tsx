import SectionHero from "@/components/SectionHero";
import map from "../assets/globalpresence-light.png";
import mapdark from "../assets/globalpresence.png";
import { useState } from "react";

const locations = [
  {
    country: "Hong Kong",
    role: "Headquarters",
    image:
      "https://images.unsplash.com/photo-1769170025204-55f2e7beefb3?w=600&h=700&fit=crop",
  },
  {
    country: "Philippines",
    role: "Operations",
    image:
      "https://images.unsplash.com/photo-1664371354575-a776003a417d?w=600&h=700&fit=crop",
  },
  {
    country: "Taiwan",
    role: "Technology Arm",
    image:
      "https://images.unsplash.com/photo-1741004419862-5f3600cc7a97?w=600&h=700&fit=crop",
  },
];

// Group holdings focus areas
const services = [
  {
    label: "Consulting",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop",
  },
  {
    label: "Tech Solutions",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=700&fit=crop",
  },
  {
    label: "Restaurants",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=700&fit=crop",
  },
  {
    label: "Creative Production",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=700&fit=crop",
  },
];

// Add to your GlobalPresencePage, below the first grid section and above Group Holdings

const countryDetails = [
  {
    country: "Hong Kong",
    role: "Headquarters",
    tagline: "Where the Group is steered",
    image: "https://images.unsplash.com/photo-1769170025204-55f2e7beefb3?w=600&h=600&fit=crop",
    keywords: ["Leadership", "Governance", "Strategy"],
    description:
      "Hong Kong serves as the nerve center of JPSC Group — where executive decisions are made, capital is allocated, and the Group's long-term direction is set. Our presence here connects us to one of Asia's most dynamic financial and business ecosystems.",
    focus: [
      "Executive leadership & group governance",
      "Capital structuring & investor relations",
      "Strategic partnerships across Asia-Pacific",
    ],
    reverse: false,
  },
  {
    country: "Philippines",
    role: "Operations Hub",
    tagline: "Where execution happens",
    image: "https://images.unsplash.com/photo-1664371354575-a776003a417d?w=600&h=600&fit=crop",
    keywords: ["Operations", "Hospitality", "Growth"],
    description:
      "The Philippines is home to our most active operational footprint — spanning restaurants, consulting engagements, and business support services. A talented local workforce and a rapidly growing consumer market make this our engine room.",
    focus: [
      "Restaurant & hospitality portfolio management",
      "Business consulting delivery & client services",
      "Talent development & operational excellence",
    ],
    reverse: true,
  },
  {
    country: "Taiwan",
    role: "Technology Arm",
    tagline: "Where technology is built",
    image: "https://images.unsplash.com/photo-1741004419862-5f3600cc7a97?w=600&h=600&fit=crop",
    keywords: ["Innovation", "Engineering", "Digital"],
    description:
      "Taiwan anchors our technology capabilities. Drawing on the island's world-class engineering talent and deep semiconductor heritage, our Taiwan team builds the digital infrastructure and software solutions that power the Group's ventures.",
    focus: [
      "Software development & digital product delivery",
      "Tech solutions for internal Group operations",
      "R&D and emerging technology exploration",
    ],
    reverse: false,
  },
];

// Badge positions per country (top-left, bottom-left, right)
const badgePositions = [
  ["-top-3 -left-3", "bottom-14 -left-7", "top-1/2 -right-5 -translate-y-1/2"],
  ["-top-3 -left-3", "bottom-14 -left-7", "top-1/2 -right-5 -translate-y-1/2"],
  ["-top-3 -left-3", "bottom-14 -left-7", "top-1/2 -right-5 -translate-y-1/2"],
];

const GlobalPresencePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex ?? 0;

  return (
    <div>
      <SectionHero
        label="Global Presence"
        title="Where We Operate"
        description="With our headquarters in Hong Kong and operations spanning Taiwan and the Philippines, we are building a connected network across Asia-Pacific - and growing."
      />

      <div className="max-w-[90rem] mx-auto my-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Map */}
          <div className="relative group">
            <img
              src={map}
              alt="Global presence map"
              className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-colors duration-500"
            />
            <img
              src={mapdark}
              alt="Global presence map"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Right: Text + location visuals */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-brand-primary-500 text-5xl tracking-wide leading-tight font-thin">
              We Spread Around
              <br />
              <span className="text-black font-bold">The World</span>
            </h2>
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              JPSC Group Holding Inc. operates through a connected Asia-Pacific
              footprint, with leadership in Hong Kong, business operations in
              the Philippines, and a technology arm in Taiwan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {locations.map((location) => (
                <div
                  key={location.country}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="h-40">
                    <img
                      src={location.image}
                      alt={`${location.country} city presence`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-[2px]">
                      {location.role}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800 leading-snug">
                      {location.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Group Holdings Section */}
        <div className="mt-20 bg-[#f0f4f8] rounded-sm py-12 px-10">
          {/* Heading*/}
          <div>
            <h2 className="text-brand-primary-500 text-5xl tracking-wide leading-tight font-thin">
              Built Across
              <br />
              <span className="text-black font-bold"> Core Ventures</span>
            </h2>
            <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-sm">
              Our portfolio brings strategic advisory, digital execution,
              hospitality operations, and creative media capabilities under one
              coordinated group.
            </p>

            <div className="text-right text-xs tracking-[3px] uppercase text-brand-primary-400 mb-8 mt-12 md:mt-0">
              [ OUR GROUP ]
            </div>
          </div>

          {/** Images */}
          <div className="flex justify-end">
            <div className="flex flex-col md:flex-row gap-4 overflow-hidden w-full md:w-[80%]">
              {services.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={service.label}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`flex flex-col gap-3 transition-all duration-500 ease-out ${
                      isActive ? "flex-[2]" : "flex-[0.7]"
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.label}
                        className={`aspect-video md:aspect-auto h-auto md:h-72 w-full object-cover hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                    <p className="text-center text-sm font-semibold text-slate-800">
                      {service.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* === COUNTRY PURPOSE SECTION === */}
<div className="max-w-[90rem] mx-auto my-20 px-8">
  {/* Section Header */}
  <div className="mb-16">
    <p className="text-xs tracking-[3px] uppercase text-slate-400 mb-4">[ Our Presence ]</p>
    <h2 className="text-brand-primary-500 text-5xl font-thin tracking-wide leading-tight">
      More Than a Location —
    </h2>
    <h2 className="text-black text-5xl font-bold tracking-wide leading-tight mb-4">
      A Purpose in Every City
    </h2>
    <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
      Each office carries a distinct role within the Group. Here's what we do, and why we do it there.
    </p>
  </div>

  {/* Country Entries */}
  <div className="flex flex-col divide-y divide-slate-100">
    {countryDetails.map((loc, i) => (
      <div
        key={loc.country}
        className={`flex flex-col md:flex-row ${loc.reverse ? "md:flex-row-reverse" : ""} gap-14 items-center py-16`}
      >
        {/* Image */}
        <div className="relative flex justify-center shrink-0">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <img
              src={loc.image}
              alt={loc.country}
              className="w-full h-full object-cover rounded-full brightness-90"
            />
            {/* Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary-500/20 to-slate-900/40" />
            {/* Floating Keywords */}
            {loc.keywords.map((kw, ki) => (
              <span
                key={kw}
                className={`absolute ${badgePositions[i][ki]} bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md border border-white/60`}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-[10px] tracking-[3px] uppercase text-brand-primary-500 flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-500 inline-block" />
            {loc.role}
          </p>
          <h3 className="text-4xl font-bold text-slate-900 leading-none mb-1">{loc.country}</h3>
          <p className="text-lg font-light italic text-brand-primary-400 mb-4">{loc.tagline}</p>
          <div className="w-10 h-[1.5px] bg-brand-primary-400 opacity-40 mb-5" />
          <p className="text-sm text-slate-500 leading-relaxed mb-6">{loc.description}</p>
          <ul className="space-y-2">
            {loc.focus.map((f, fi) => (
              <li key={f} className="flex items-start gap-3 text-[12.5px] text-slate-700 font-medium">
                <span className="shrink-0 w-[18px] h-[18px] rounded bg-slate-100 flex items-center justify-center text-[9px] font-bold text-brand-primary-500 mt-0.5">
                  0{fi + 1}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default GlobalPresencePage;
