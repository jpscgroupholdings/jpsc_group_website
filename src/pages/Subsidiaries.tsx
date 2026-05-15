import SectionHero from "@/components/SectionHero";
import { useState } from "react";
import JPSC from "../assets/company_logo/JPSC.jpg";
import JPPRO from "../assets/company_logo/JPPRO.jpg";
import Harrison from "../assets/company_logo/Harrison.jpg";
import JPTech from "../assets/company_logo/jptech.jpeg";
import MainLogo from "../assets/logo.png";

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
    location: "Hong Kong & Philippines",
    name: "JPSC Group Holdings Inc",
    tags: ["Holding Company", "International Investment"],
    description:
      "The parent holding entity of the JPSC Group, incorporated in Hong Kong. It anchors the group's international investment strategy and provides the overarching governance framework across all subsidiaries, enabling cross-border capital deployment and global growth. Serving as the group's operational headquarters, this entity oversees day-to-day corporate management across all Philippine-based ventures. It coordinates strategy, human resources, and operations to ensure cohesive execution of the group's regional vision.",
    image:
     MainLogo,
  },
  {
    index: "02",
    location: "Consulting",
    name: "JP & Son Group Consulting Services Inc.",
    tags: ["Advisory", "Consulting Services"],
    description:
      "Our dedicated consulting arm, providing strategic advisory services to both internal entities and external clients. From business transformation to operational efficiency, JP & Son brings structured methodologies and deep industry expertise to every engagement.",
    image:
      JPSC,
  },
  {
    index: "03",
    location: "Technology",
    name: "JP Technology Solutions Inc.",
    tags: ["Technology Services", "Software Development"],
    description:
      "The group's technology powerhouse, delivering end-to-end software development and IT solutions. JPTech builds scalable digital products for internal operations and external clients, driving the group's commitment to innovation-led growth across every vertical.",
    image:
      JPTech,
  },
  {
    index: "04",
    location: "Media",
    name: "JP Pro Solutions Corp.",
    tags: ["Branding", "Campaign Portfolio", "Media"],
    description:
      "JPPro is the creative force behind the group's brand presence. Specializing in integrated marketing, media production, and brand storytelling, it crafts compelling campaigns that amplify identity and drive engagement across all JPSC Group companies.",
    image:
      JPPRO,
  },
  {
    index: "05",
    location: "Restaurant Brand",
    name: "JP FoodLab Group Corp.",
    tags: ["Restaurant Brand", "Brand Expansion"],
    description:
      "A homegrown Filipino dining brand bringing the authentic taste of inasal and charcoal-grilled barbecue to the table. Harrison House stands as a flagship consumer brand under the group, with a clear roadmap for multi-location expansion and franchise development.",
    image:
      Harrison,
  },
  {
    index: "06",
    location: "Taiwan",
    name: "Qihua Technology",
    tags: ["Technology Development", "Industrial Innovation"],
    description:
      "Based in Taiwan, Qihua Technology focuses on advanced technology development and industrial innovation. It extends the group's technical capabilities into hardware and industrial solutions, forming a key bridge between the group's regional tech ecosystem and global markets.",
    image:
      MainLogo,
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

      <SectionHero
        label="Corporate Structure"
        title="Our Subsidiaries"
        description="A diversified portfolio of companies spanning technology, food
          innovation, consulting, media, and international investment — united
          under the JPSC Group umbrella."
      />

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
                className="w-full h-full object-contain min-h-44 transition-transform duration-500"
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
                  {sub.index === "05" && (<p className="text-[#ef4501] text-lg"><span className="italic font-thin text-brand-primary-500">doing business under - </span> Harrison House of Inasal & BBQ</p>)}
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
