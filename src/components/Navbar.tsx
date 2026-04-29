import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {  ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

interface SimpleRoute {
  type: "link";
  href: string;
  label: string;
}

interface DropdownRoute {
  type: "dropdown";
  label: string;
  children: { href: string; label: string }[];
}

type NavItem = SimpleRoute | DropdownRoute;

const navItems: NavItem[] = [
  { type: "link", href: "/", label: "Home" },
  {
    type: "dropdown",
    label: "Company",
    children: [
      { href: "/about", label: "About" },
      { href: "/missionvision", label: "Mission & Vision" },
      { href: "/history", label: "History" },
    ],
  },
  {
    type: "dropdown",
    label: "What We Do",
    children: [
      { href: "/target-markets", label: "Target Markets" },
      { href: "/services", label: "Services" },
    ],
  },
  {
    type: "dropdown",
    label: "Connect",
    children: [
      { href: "/contact", label: "Contact" },
      { href: "/workplace", label: "Workplace" },
      { href: "/FAQ", label: "FAQ" },
    ],
  },
];

// Menu Accordion

const MenuAccordion = ({
  item,
  onClose,
}: {
  item: DropdownRoute;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-2xl md:text-3xl font-serif text-white/90 group-hover:text-white transition-colors">
          {item.label}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-white/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64 pb-4" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-1 pl-4 border-l border-white/20">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={onClose}
              className="py-2 text-base text-white/60 hover:text-white tracking-wide transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${menuOpen ? "bg-transparent" : scrolled ? "bg-white backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
      >
        <div className="px-6 md:px-12 mx-auto flex items-center justify-between h-16 md:h-20 max-w-[90rem]">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="JPSC Logo"
              className="w-36 md:w-44 transition-all duration-300"
            />
          </Link>

          {/** Right side */}
          <div className="flex items-center gap-4">
            {/** Menu button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`flex items-center gap-2 text-xs tracking-[0.2rem] uppercase font-medium transition-colors duration-300 ${scrolled && !menuOpen ? "text-gray-800" : "text-amber-400"}`}
            >
              <span>Menu</span>
              <div className="flex flex-col w-5 gap-[5px]">
                <span
                  className={`h-px block bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                />
                <span
                  className={`h-px block bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`h-px block bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/** Full screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d1a2d] transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="h-full flex flex-col px-6 md:px-24 pt-28 pb-10 max-w-7xl mx-auto">
          {/** Nav items */}
          <nav className="flex-1">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <div key={item.href} className="border-b border-white/10">
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-5 text-2xl md:text-3xl font-serif text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <MenuAccordion
                  key={item.label}
                  item={item}
                  onClose={() => setMenuOpen(false)}
                />
              );
            })}
          </nav>

          {/* Footer info inside menu */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="JPSC"
                className="w-7 h-7 object-contain brightness-0 invert opacity-60"
              />
              <span className="text-white/40 text-xs tracking-widest uppercase">
                JPSC Group Holdings Inc.
              </span>
            </div>
            <span className="text-white/30 text-xs tracking-wide">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
