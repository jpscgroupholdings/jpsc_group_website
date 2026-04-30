import logowhite from "../assets/logo-white.png";
import {Quote } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData = [
    {
      title: "Corporate",
      details: [
        { name: "About us", path: "/" },
        { name: "Leadership", path: "/" },
        { name: "Governance", path: "/" },
        { name: "Mission & Vision", path: "/" },
      ],
    },
    {
      title: "Business",
      details: [
        { name: "Subsidaries", path: "/" },
        { name: "Portfolio", path: "/" },
        { name: "Global Presence", path: "/" },
      ],
    },
    {
      title: "Need help?",
      details: [
        { name: "Contact us", path: "/" },
        { name: "Inquiry Form", path: "/" },
        { name: "Careers", path: "/" },
      ],
    },
  ];

  return (
    <footer
      id="footer"
      data-aos="fade-up"
      className="bg-brand-primary-900 border-t border-brand-primary-500"
    >
      <div className="py-12 lg:py-16">
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16 px-12 md:px-8">
          <div className="space-y-4 flex flex-col items-start">
            <a rel="noreferrer noopener" href="/">
              <img src={logowhite} alt="Company Logo" className="h-24 w-auto" />
            </a>
            <p className="text-gray-200 text-sm mb-6 leading-relaxed max-w-60 font-semibold">
              JPSC Group Holdings Inc. is a leading provider of innovative
              solutions
            </p>
          </div>

          {footerData.map((item) => (
            <div key={item.title} className="">
              <h4 className="font-semibold text-xs mb-8 text-gray-300">
                {item.title}
              </h4>
              <div className="space-y-3">
                {item.details.map((item, index) => (
                  <div className="flex gap-2 group">
                    <a
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 group-hover:text-gray-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="border-t border-brand-accent-300/50">
          <div className="mx-auto max-w-4xl px-4 pt-16 text-center">
            <div className="relative">
              {/* Big opening quote */}
              <span className="absolute -left-4 -top-6 text-7xl font-bold text-brand-accent-500 -scale-x-100">
                <Quote />
              </span>

              <p className="text-lg leading-relaxed text-gray-200 md:text-xl font-medium">
                We are not operating businesses only — we are building a
                structured investment group designed for long-term public market
                readiness.
              </p>

              {/* Big closing quote */}
              <span className="absolute -right-4 -bottom-6 text-7xl font-bold text-brand-accent-500 scale-x-100">
                <Quote />
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-brand-accent-300/50 py-8">
        <p className="text-gray-400 text-sm text-center">
          © {currentYear} JPSC Group Holdings Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
