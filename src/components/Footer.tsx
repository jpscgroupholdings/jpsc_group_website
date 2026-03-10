{
  /* import { LogoIcon } from "./Icons"; */
}
import logo from "../assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactUs = [
    { value: "02-5310-5608", icon: <Phone size={16} /> },
    { value: "info@digitaloneph.com", icon: <Mail size={16} /> },
    { value: "Kalayaan Ave, Makati, Metro Manila", icon: <MapPin size={16} /> },
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
      className="bg-gray-50 border-t border-primary"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-4">
            <a
              rel="noreferrer noopener"
              href="/"
              className="flex items-center gap-3 font-bold text-2xl text-primary"
            >
              <img src={logo} alt="Company Logo" className="h-10 w-auto" />
              JPSC
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-60">
              JPSC Group Holdings Inc. is a leading provider of innovative
              solutions
            </p>
          </div>

          <div className="">
            <h4 className="font-semibold text-lg mb-4 text-primary">Contact us</h4>
            <div className="space-y-3">
              {contactUs.map((item, index) => (
                <div className="flex gap-2">
                  <div className="text-gray-500">{item.icon}</div>
                  <p
                    key={index}
                    className="text-gray-500 hover:text-gray-600 transition-colors text-sm"
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold text-lg mb-4 text-primary">Company</h4>
            <div className="space-y-3 flex flex-col">
              {companyList.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-200 py-8">
        <p className="text-gray-400 text-sm text-center">
          © {currentYear} JPSC Group Holdings Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
