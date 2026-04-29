{
  /* import { LogoIcon } from "./Icons"; */
}
import logowhite from "../assets/logo-white.png";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactUs = [
    {
      value: "02-5310-5608",
      icon: <Phone size={16} />,
      href: "tel:02-5310-5608",
    },
    {
      value: "info@digitaloneph.com",
      icon: <Mail size={16} />,
      href: "mailto:info@digitaloneph.com",
    },
    {
      value: "Kalayaan Ave, Makati, Metro Manila",
      icon: <MapPin size={16} />,
      href: "https://www.google.com/maps?q=14.566264730473002,121.02815318494143",
    },
  ];

  const companyList = [
    { name: "About us", path: "/about-another" },
    { name: "Mission / Vision", path: "/missionvision-another" },
    { name: "History", path: "/history-another" },
  ];

  return (
    <footer
      id="footer"
      data-aos="fade-up"
      className="bg-brand-primary-900 border-t border-brand-primary-500"
    >
      <div className="py-12 lg:py-16">
        <section className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16 px-12 md:px-8">
          <div className="space-y-4 flex flex-col items-start">
            <a rel="noreferrer noopener" href="/">
              <img src={logowhite} alt="Company Logo" className="h-24 w-auto" />
            </a>
            <p className="text-gray-200 text-sm mb-6 leading-relaxed max-w-60 font-semibold">
              JPSC Group Holdings Inc. is a leading provider of innovative
              solutions
            </p>
          </div>

          <div className="">
            <h4 className="font-semibold text-lg mb-4 text-gray-400">
              Contact us
            </h4>
            <div className="space-y-3">
              {contactUs.map((item, index) => (
                <div className="flex gap-2 group">
                  <div className="text-gray-200 group-hover:text-gray-400">
                    {item.icon}
                  </div>
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 group-hover:text-gray-400 transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold text-lg mb-4 text-gray-400">
              Company
            </h4>
            <div className="space-y-3 flex flex-col">
              {companyList.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="text-gray-200 hover:text-gray-400 transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold text-lg mb-4 text-gray-400">
              Company
            </h4>
            <div className="space-y-3 flex flex-col">
              {companyList.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="text-gray-200 hover:text-gray-400 transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-brand-accent-300">
          <div className="mx-auto max-w-4xl px-4 pt-16 text-center">
            <div className="relative">
              {/* Big opening quote */}
              <span className="absolute -left-4 -top-6 text-7xl font-bold text-brand-accent-500">
                &quot;
              </span>

              <p className="text-xl leading-relaxed text-gray-200 md:text-2xl font-medium">
                We are not operating businesses only — we are building a
                structured investment group designed for long-term public market
                readiness.
              </p>

              {/* Big closing quote */}
              <span className="absolute -right-4 -bottom-6 text-7xl font-bold text-brand-accent-500">
                &quot;
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-brand-accent-200 py-8">
        <p className="text-gray-200 text-sm text-center">
          © {currentYear} JPSC Group Holdings Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
