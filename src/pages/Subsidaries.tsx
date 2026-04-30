import { useState } from "react";

interface Subsidiary {
  index: string;
  location: string;
  name: string;
  tags: string[];
  description: string;
  image: string;
}

const subsidiaries: Subsidiary[] = [
  {
    index: "01",
    location: "Hong Kong",
    name: "JPSC Group Ltd",
    tags: ["Holding Company", "International Investment"],
    description:
      "The parent holding entity of the JPSC Group, incorporated in Hong Kong. It anchors the group's international investment strategy and provides the overarching governance framework across all subsidiaries, enabling cross-border capital deployment and global growth.",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80&fit=crop",
  },
  {
    index: "02",
    location: "Philippines",
    name: "JPSC Group Ltd (Philippines)",
    tags: ["Operational HQ", "Corporate Management"],
    description:
      "Serving as the group's operational headquarters, this entity oversees day-to-day corporate management across all Philippine-based ventures. It coordinates strategy, human resources, and operations to ensure cohesive execution of the group's regional vision.",
    image:
      "https://images.unsplash.com/photo-1555990793-da11153b2473?w=600&q=80&fit=crop",
  },
  {
    index: "03",
    location: "Consulting",
    name: "JP & Son Group Consulting Services",
    tags: ["Advisory", "Consulting Services"],
    description:
      "Our dedicated consulting arm, providing strategic advisory services to both internal entities and external clients. From business transformation to operational efficiency, JP & Son brings structured methodologies and deep industry expertise to every engagement.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
  },
  {
    index: "04",
    location: "Technology",
    name: "JPTech Solutions Philippines Inc",
    tags: ["Technology Services", "Software Development"],
    description:
      "The group's technology powerhouse, delivering end-to-end software development and IT solutions. JPTech builds scalable digital products for internal operations and external clients, driving the group's commitment to innovation-led growth across every vertical.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fit=crop",
  },
  {
    index: "05",
    location: "Media",
    name: "JPPro Marketing & Media",
    tags: ["Branding", "Campaign Portfolio", "Media"],
    description:
      "JPPro is the creative force behind the group's brand presence. Specializing in integrated marketing, media production, and brand storytelling, it crafts compelling campaigns that amplify identity and drive engagement across all JPSC Group companies.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&fit=crop",
  },
  {
    index: "06",
    location: "Food Innovation",
    name: "JPFood Lab",
    tags: ["Food Innovation", "Restaurant Development"],
    description:
      "JPFood Lab is the group's culinary research and development division. It explores new flavors, formats, and food concepts — incubating restaurant ideas from concept to market-ready brand, fueling the group's expanding footprint in the food and beverage industry.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&fit=crop",
  },
  {
    index: "07",
    location: "Restaurant Brand",
    name: "Harrison House of Inasal and BBQ",
    tags: ["Restaurant Brand", "Brand Expansion"],
    description:
      "A homegrown Filipino dining brand bringing the authentic taste of inasal and charcoal-grilled barbecue to the table. Harrison House stands as a flagship consumer brand under the group, with a clear roadmap for multi-location expansion and franchise development.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&fit=crop",
  },
  {
    index: "08",
    location: "Taiwan",
    name: "Qihua Technology",
    tags: ["Technology Development", "Industrial Innovation"],
    description:
      "Based in Taiwan, Qihua Technology focuses on advanced technology development and industrial innovation. It extends the group's technical capabilities into hardware and industrial solutions, forming a key bridge between the group's regional tech ecosystem and global markets.",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80&fit=crop",
  },
];

export default function SubsidiariesPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-gray-50 font-sans scroll-mt-32"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* Hero */}
      <div className="bg-brand-primary-500 px-10 py-20 relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-brand-primary-300 opacity-20 pointer-events-none" />
        <div className="absolute right-10 top-10 w-52 h-52 rounded-full border border-brand-primary-300 opacity-10 pointer-events-none" />

        <p
          className="text-brand-accent-500 text-xs font-medium tracking-widest uppercase mb-4"
          style={{ letterSpacing: "0.18em" }}
        >
          Corporate Structure
        </p>
        <div className="w-10 h-0.5 bg-brand-accent-500 mb-6" />
        <h1
          className="font-display text-white text-5xl font-semibold leading-tight max-w-lg mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Subsidiaries
        </h1>
        <p className="text-brand-primary-200 text-sm font-light max-w-md leading-relaxed">
          A diversified portfolio of companies spanning technology, food
          innovation, consulting, media, and international investment — united
          under the JPSC Group umbrella.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[90rem] mx-auto px-6 py-16 flex flex-col">
        {subsidiaries.map((sub, i) => (
          <div
            key={sub.index}
            className={`
              flex items-stretch bg-white overflow-hidden
              transition-shadow duration-300 cursor-default
              ${i === 0 ? "rounded-t-xl" : ""}
              ${i === subsidiaries.length - 1 ? "rounded-b-xl" : ""}
              ${i < subsidiaries.length - 1 ? "border-b border-gray-100" : ""}
              ${hovered === sub.index ? "shadow-md" : "shadow-none"}
            `}
            onMouseEnter={() => setHovered(sub.index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div className="w-56 min-w-56 relative overflow-hidden flex-shrink-0">
              <img
                src={sub.image}
                alt={sub.name}
                className="w-full h-full object-cover min-h-44 transition-transform duration-500"
                style={{
                  transform: hovered === sub.index ? "scale(1.05)" : "scale(1)",
                }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-brand-primary-500 opacity-10" />
            </div>

            {/* Body */}
            <div className="flex-1 px-9 py-8 border-l border-gray-100 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-gray-400 text-xs font-medium tracking-widest"
                  style={{ letterSpacing: "0.14em" }}
                >
                  {sub.index}
                </span>
                <span className="w-px h-3 bg-gray-200" />
                <span className="text-gray-400 text-xs font-medium tracking-wide uppercase">
                  {sub.location}
                </span>
              </div>

              <h2
                className="text-brand-primary-500 text-xl font-semibold leading-snug mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {sub.name}
              </h2>

              <div className="flex flex-wrap gap-2 mb-4">
                {sub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gray-500 text-xs font-medium bg-gray-100 px-2.5 py-1 rounded"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {sub.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 text-xs pb-14 tracking-wide">
        © JPSC Group Ltd. All Rights Reserved.
      </p>
    </div>
  );
}
