import { useEffect, useState } from "react";
import JPSC from "../../assets/company_logo/JPSC.jpg";
import JPPRO from "../../assets/company_logo/JPPRO.jpg";
import Harrison from "../../assets/company_logo/Harrison.jpg";
import DigitalOne from "../../assets/company_logo/DigitalOne.jpg";
import MainLogo from "../../assets/logo.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Subsidaries = () => {
  const subsidiariesLogos = [
    { name: "JPSC Consulting Services", path: JPSC },
    { name: "JPPRO", path: JPPRO },
    { name: "Harrison House of Inasal & BBQ", path: Harrison },
    { name: "JP Tech Solutions Inc", path: DigitalOne },
    { name: "JP FoodLab", path: MainLogo },
    { name: "JPSC Group Ltd (Hongkong)", path: MainLogo },
    { name: "JPSC Group Ltd (Philippines)", path: MainLogo },
    { name: "Qihua Technology (Taiwan)", path: MainLogo },
  ];

  const total = subsidiariesLogos.length;

  const getVisibleCount = () => {
    const w = window.innerWidth;
    if (w >= 1024) return 4;
    if (w >= 768) return 3;
    if (w >= 640) return 2;
    return 1;
  };

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handler = () => {
      setVisibleCount(getVisibleCount());
      setStartIndex(0);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const visibleItems = Array.from(
    { length: visibleCount },
    (_, i) => subsidiariesLogos[(startIndex + i) % total],
  );

  const next = () => setStartIndex((s) => (s + 1) % total);
  const prev = () => setStartIndex((s) => (s - 1 + total) % total);

  return (
    <div
      className="px-4 w-full flex items-center justify-center sm:py-24 py-32 rounded-2xl"
      data-aos="fade-up"
    >
      <div className="w-full max-w-[90rem]">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12 text-brand-primary-700 tracking-tight">
          Our Subsidiaries
        </h2>

        <div className="relative">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
            }}
          >
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center justify-center"
              >
                <img
                  src={item.path}
                  alt={item.name}
                  className="max-h-60 max-w-full object-contain transition-transform duration-300 scale-95 group-hover:scale-100"
                />
                <p className="text-sm text-brand-primary-500 italic">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md shadow-md rounded-full p-2 hover:scale-110 hover:bg-brand-primary-500 hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md shadow-md rounded-full p-2 hover:scale-110 hover:bg-brand-primary-500 hover:text-white transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots — one per logo, active = startIndex */}
        <div className="flex justify-center gap-2 mt-6">
          {subsidiariesLogos.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === startIndex
                  ? "bg-brand-primary-500 w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
