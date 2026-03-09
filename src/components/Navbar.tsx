import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
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
      { href: "/about-another", label: "About" },
      { href: "/missionvision-another", label: "Mission & Vision" },
      { href: "/history-another", label: "History" },
    ],
  },
  {
    type: "dropdown",
    label: "What We Do",
    children: [
      { href: "/targetmarkets-another", label: "Target Markets" },
      { href: "/services-another", label: "Services" },
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

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────

const DesktopDropdown = ({ item }: { item: DropdownRoute }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-44 rounded-md border border-border bg-white dark:bg-background shadow-md z-50 py-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Mobile Accordion ─────────────────────────────────────────────────────────

const MobileAccordion = ({ item, onClose }: { item: DropdownRoute; onClose: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-0.5 ml-3 flex flex-col border-l-2 border-gray-100 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={onClose}
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky border-b top-0 z-50 w-full bg-white dark:bg-background dark:border-b-slate-700">
        <div className="container h-14 px-4 mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <img src={logo} alt="JPSC Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span className="hidden sm:inline">JPSC Group Holdings Inc.</span>
            <span className="sm:hidden">JPSC</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <DesktopDropdown key={item.label} item={item} />
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ModeToggle />
          </div>

          {/* ── Mobile Hamburger ── */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Menu Overlay — only renders on mobile ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute top-0 left-0 right-0 bg-white rounded-b-2xl shadow-xl px-4 pt-4 pb-6 flex flex-col gap-1">
            {/* Header row */}
            <div className="flex items-center justify-between mb-3">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 font-bold text-lg"
              >
                <img src={logo} alt="JPSC Logo" className="w-8 h-8 object-contain" />
                JPSC Group Holdings Inc.
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Nav items */}
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <MobileAccordion
                  key={item.label}
                  item={item}
                  onClose={() => setMobileOpen(false)}
                />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;