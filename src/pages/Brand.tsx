import { useState, useEffect, useRef } from "react";
import FutureBrandsPage from "./FutureBrands";
import harrison from "../assets/harrison.jpg";
import dining from "../assets/dining.png";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15, ...options },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function PhotoBlock({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative max-h-40 overflow-hidden bg-brand-primary-900 ${className}`}
    >
      <img
        src={src}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/25" />

      <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.25em] text-white/70">
        {label}
      </span>
    </div>
  );
}

// ── HERO ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-brand-primary-900">
      {/* Left */}
      <div className="flex flex-col justify-end w-full lg:w-[45%] px-6 py-16 sm:px-10 md:px-14 lg:pb-20">
        <FadeUp>
          <p className="mb-4 text-[10px] sm:text-xs tracking-[0.24rem] sm:tracking-[0.3rem] uppercase text-brand-accent-500">
            01 · Brand Story
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="font-serif font-black leading-none text-white text-[clamp(42px,13vw,80px)] lg:text-[clamp(52px,5.5vw,80px)]">
            HARRISON
            <br />
            <span className="text-[#ef4501]">
              HOUSE
              <br />
              OF INASAL
              <br />
              &amp; BBQ
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="my-6 sm:my-8 h-px bg-brand-accent-500" />

          <p className="max-w-md text-sm sm:text-base lg:text-sm leading-loose text-brand-accent-500">
            Born from the smoke and soul of Filipino tradition. A gathering
            place where the grill never goes cold and every meal feels like
            coming home.
          </p>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="flex gap-2 mt-8 sm:mt-10">
            <div className="w-2 h-2 rounded-full bg-brand-accent-600" />
            <div className="w-2 h-2 rounded-full bg-brand-accent-200" />
            <div className="w-2 h-2 rounded-full bg-brand-accent-100" />
          </div>
        </FadeUp>
      </div>

      {/* Right */}
      <div className="relative flex-1 min-h-[420px] sm:min-h-[520px] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-brand-primary-900">
          <img
            src={harrison}
            alt="Harrison House of Inasal and BBQ"
            className="w-auto object-cover"
          />

          {/* Small floating card */}
          <div className="absolute top-6 right-4 sm:top-10 sm:right-8 lg:top-20 lg:right-10 w-44 sm:w-52 px-4 sm:px-6 py-3 sm:py-4 border border-brand-accent-500 bg-brand-primary-900">
            <p className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.23em] uppercase text-brand-accent-500">
              Char-Grilled · Wood-Fired
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-200">
              Inasal & BBQ
            </p>
          </div>

          {/* Bottom pill */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 bg-[#ef4501] border border-white/30 py-3 px-5 sm:px-9 whitespace-nowrap">
            <p className="text-[8px] sm:text-[9px] tracking-[0.24em] sm:tracking-[0.3em] uppercase text-white">
              Est. Harrison Group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── WHAT WE DO ────────────────────────────────────────────────────
function WhatWeDo() {
  const [ref, inView] = useInView();

  const indexItems = [
    "Brand Story",
    "Menu Highlights",
    "Dining Experience",
    "Expansion Plan",
    "Franchise Opp.",
  ];

  const menuItems = [
    "Signature Chicken Inasal",
    "Pork BBQ Skewers",
    "Liempo & Chops",
    "Java Rice & Garlic Rice",
    "Sinigang Soup",
    "Pecho",
  ];

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?q=80&w=900&auto=format&fit=crop",
      label: "Inasal",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop",
      label: "Grill",
    },
    {
      src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=900&auto=format&fit=crop",
      label: "BBQ",
    },
    {
      src: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?q=80&w=900&auto=format&fit=crop",
      label: "Sides",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-brand-accent-50 px-6 py-20 md:px-10 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-brand-accent-800">
              02 · What We Do
            </p>

            <h2
              className={`font-serif text-[clamp(38px,8vw,64px)] font-black leading-none transition-all delay-75 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              WHAT WE
              <br />
              SERVE?
            </h2>
          </div>

          <p
            className={`max-w-md pt-0 text-sm leading-[1.9] text-brand-primary-700 transition-opacity delay-75 ease-in md:max-w-xs md:pt-5 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            We serve <strong>authentic Filipino inasal</strong> —
            slow-marinated, wood-fired chicken — alongside sizzling BBQ cuts and
            timeless comfort sides. Every dish carries the warmth of Filipino
            hospitality.
          </p>
        </div>

        {/* Body */}
        <div className="grid gap-10 lg:grid-cols-[12rem_1fr_14rem] lg:gap-8">
          {/* Index list */}
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-brand-primary-800">
              Index
            </p>

            <div>
              {indexItems.map((item, i) => (
                <p
                  key={item}
                  className={`text-xs leading-[2.4] ${
                    i === 2
                      ? "font-bold text-brand-primary-500"
                      : "font-normal text-brand-primary-500/60"
                  }`}
                >
                  0{i + 1}. &nbsp;{item}
                </p>
              ))}
            </div>

            <div className="my-5 h-px bg-brand-accent-500" />
            <div className="h-4 w-4 rounded-full bg-[#8B2E2E]" />
          </div>

          {/* Photo grid */}
          <div className="grid min-h-[360px] grid-cols-1 gap-2 sm:grid-cols-2">
            {photos.map((photo) => (
              <PhotoBlock key={photo.label} {...photo} />
            ))}
          </div>

          {/* Checklist */}
          <div className="pt-0 text-xs leading-[2.5] text-[#6a5a4a] lg:pt-2">
            {menuItems.map((item) => (
              <div key={item} className="flex gap-2">
                <span>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// ── MISSION ───────────────────────────────────────────────────────
function Mission() {
  const pillars = [
    {
      title: "Authentic",
      desc: "Recipes rooted in Visayan tradition, prepared fresh every day.",
    },
    {
      title: "Community",
      desc: "A brand built around the Filipino dining culture of sharing.",
    },
    {
      title: "Scalable",
      desc: "Systems designed for franchise growth without losing soul.",
    },
  ];
  return (
    <section className="py-24 px-14" style={{ background: "#EDE8E0" }}>
      <div className="max-w-6xl mx-auto flex gap-12 items-start">
        {/* Left */}
        <div style={{ width: "38%" }}>
          <FadeUp>
            <p
              style={{
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#9a7c5c",
                marginBottom: 14,
              }}
            >
              03 · Our Mission
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px,3.5vw,56px)",
                fontWeight: 900,
                lineHeight: 1.0,
              }}
            >
              OUR
              <br />
              <span style={{ color: "#8B2E2E" }}>MISSION</span>
            </h2>
            <div
              className="my-8"
              style={{ height: 1, background: "#D0C4B4" }}
            />
            {[
              "Keep Filipino BBQ culture alive and proud",
              "Deliver consistent quality at every table",
              "Grow a brand that families trust",
            ].map((t) => (
              <p
                key={t}
                style={{ fontSize: 12, color: "#7a6a58", lineHeight: "2.4" }}
              >
                ✓ &nbsp;{t}
              </p>
            ))}
          </FadeUp>
        </div>

        {/* Center tall */}
        <div
          style={{
            width: 240,
            height: 380,
            background: "linear-gradient(160deg,#3a2e24,#7a5a3a)",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,240,235,0.2)",
            }}
          >
            Dining Ambiance
          </p>
        </div>

        {/* Right pillars */}
        <div className="flex-1 flex gap-6">
          <div className="flex flex-col gap-1">
            {["#C8A87A,#a08060", "#7a3030,#4a1a1a", "#5a4a36,#8a7050"].map(
              (g, i) => (
                <PhotoBlock
                  key={i}
                  gradient={`linear-gradient(135deg,${g})`}
                  style={{ width: 110, height: 113 }}
                />
              ),
            )}
          </div>
          <div
            className="flex flex-col justify-between py-1"
            style={{ flex: 1 }}
          >
            {pillars.map(({ title, desc }) => (
              <FadeUp key={title} delay={0.1}>
                <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 5 }}>
                  {title}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "#7a6a58",
                    lineHeight: 1.8,
                    maxWidth: 160,
                  }}
                >
                  {desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── MENU HIGHLIGHTS ───────────────────────────────────────────────
const menuItems = [
  {
    tag: "Signature",
    gradient: "linear-gradient(135deg,#4a3020,#8a6040)",
    title: "Chicken Inasal",
    desc: "Slow-marinated in sukang iloco, lemongrass & annatto. Char-grilled to perfection.",
    src: "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "BBQ Star",
    gradient: "linear-gradient(135deg,#3a1818,#7a3a2a)",
    title: "Pork BBQ Skewer",
    desc: "Sweet-savory banana ketchup glaze on tender pork belly, flame-kissed to order.",
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Crowd Favorite",
    gradient: "linear-gradient(135deg,#2a2018,#5a4a28)",
    title: "Combo Platter",
    desc: "Best of both worlds — inasal + BBQ with garlic rice, atchara & soy-calamansi dip.",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop",
  },
];

function MenuHighlights() {
  return (
    <section className="py-24 px-14 bg-brand-primary-900">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[9px] tracking-[0.3em] uppercase text-brand-accent-500">
            03 · Menu Highlights
          </p>
        </FadeUp>
        <div className="flex items-end justify-between mb-14 mt-4">
          <FadeUp>
            <h2 className="font-serif text-[clamp(38px,4vw,62px)] font-black leading-none text-[#ef4501]">
              MENU
              <br />
              HIGHLIGHTS
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="max-w-xs text-xs text-gray-300 leading-[1.9]">
              Carefully curated for taste, tradition, and repeatability. Every
              item designed to make guests come back.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map(({ tag, src, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div
                className={`h-full px-6 py-8 md:px-7 md:py-8 transition-colors duration-300
        ${i < menuItems.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#2a2520]" : ""}`}
              >
                {/* Tag */}
                <p className="mb-3 text-[9px] tracking-[0.3em] uppercase text-brand-accent-500">
                  {tag}
                </p>

                {/* Image */}
                <div className="mb-5 h-[180px] overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Title */}
                <p className="mb-2 font-serif text-[20px] font-bold text-gray-100">
                  {title}
                </p>

                {/* Description */}
                <p className="text-xs leading-[1.9] text-gray-400">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── DINING EXPERIENCE ─────────────────────────────────────────────
const experiencePoints = [
  {
    title: "Open-Fire Kitchen",
    desc: "Guests see, smell, and hear every dish being made. The grill is the show.",
  },
  {
    title: "Communal Tables",
    desc: "Designed for families and barkadas — long tables that encourage sharing and laughter.",
  },
  {
    title: "Fast & Generous",
    desc: "Quick service without cutting corners — big portions, honest prices, warm staff.",
  },
];

function DiningExperience() {
  return (
    <section className="bg-brand-accent-100 px-6 py-20 md:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Left photo */}
        <FadeUp>
          <img
            src={dining}
            alt="Harrison House dining experience"
            className="h-[420px] w-full object-contain p-8 sm:h-[500px] lg:h-[560px]"
          />
        </FadeUp>

        {/* Right text */}
        <div>
          <FadeUp>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#ef4501]">
              04 · Dining Experience
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,8vw,58px)] font-black leading-none text-brand-primary-900">
              THE
              <br />
              APPROACH
            </h2>

            <div className="mb-10 h-px bg-brand-primary-900/15" />
          </FadeUp>

          <div className="flex flex-col gap-7">
            {experiencePoints.map(({ title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.12}>
                <div className="group border-l border-[#ef4501]/40 pl-5 transition-colors duration-300 hover:border-[#ef4501]">
                  <p className="mb-2 text-sm font-bold text-brand-primary-900">
                    {title}
                  </p>
                  <p className="max-w-xl text-xs leading-[1.9] text-brand-primary-700/75">
                    {desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="my-10 h-px bg-brand-primary-900/15" />

          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-primary-900/40">
            Harrison House · BBQ & Inasal · Portfolio Project
          </p>
        </div>
      </div>
    </section>
  );
}

// ── EXPANSION + FRANCHISE ─────────────────────────────────────────
const phases = [
  {
    num: "01",
    title: "Flagship",
    desc: "Establish the first Harrison House. Refine operations, recipes, and brand identity on the ground.",
    bg: "#F5F0EB",
  },
  {
    num: "02",
    title: "City Roll-out",
    desc: "Open 3–5 branches across Metro Manila, targeting high-traffic food corridors and malls.",
    bg: "#EDE8E0",
  },
  {
    num: "03",
    title: "Nationwide",
    desc: "Launch franchise model — partnering with operators across Visayas, Mindanao & Luzon.",
    bg: "#F5F0EB",
  },
];

const franchisePerks = [
  {
    title: "Turnkey Package",
    desc: "Full setup support — location scouting, fit-out, equipment, and staff training included.",
  },
  {
    title: "Operations Manual",
    desc: "Tested SOPs covering every aspect of kitchen, service, and inventory management.",
  },
  {
    title: "Ongoing Support",
    desc: "Dedicated franchise relations team and quarterly business reviews for all partners.",
  },
];

function ExpansionFranchise() {
  return (
    <section className="bg-[#F5F0EB] px-6 py-20 md:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent-800">
            05 · Growth
          </p>

          <h2 className="mb-4 font-serif text-[clamp(38px,8vw,62px)] font-black leading-none text-brand-primary-900">
            EXPANSION
            <br />
            PLAN
          </h2>
        </FadeUp>

        <div className="mb-14 flex items-end justify-between">
          <div />

          <FadeUp>
            <p className="max-w-xs text-xs leading-[1.9] text-brand-accent-600">
              Scaling with intention — from one beloved location to a household
              name across the Philippines.
            </p>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="mb-14 grid border border-brand-accent-600/80 md:grid-cols-3">
          {phases.map(({ num, title, desc, bg }, i) => (
            <FadeUp key={num} delay={i * 0.1}>
              <div
                className={`h-full px-7 py-8 ${
                  i < phases.length - 1
                    ? "border-b border-[#D0C4B4] md:border-b-0 md:border-r"
                    : ""
                }`}
                style={{ background: bg }}
              >
                <p className="mb-2.5 text-[9px] uppercase tracking-[0.3em] text-[#8B2E2E]">
                  Phase {num}
                </p>

                <p className="mb-2.5 font-serif text-[26px] font-bold text-brand-primary-900">
                  {title}
                </p>

                <p className="text-xs leading-[1.9] text-[#7a6a58]">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Franchise */}
        <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
          {/* Dark card */}
          <FadeUp>
            <div className="h-full bg-brand-primary-900 px-7 py-9 md:px-9 md:py-10">
              <p className="mb-3.5 text-[9px] uppercase tracking-[0.3em] text-brand-accent-400">
                07 · Franchise Opportunities
              </p>

              <h3 className="mb-6 font-serif text-[clamp(26px,6vw,38px)] font-black leading-[1.1] text-white">
                FRANCHISE
                <br />
                WITH
                <br />
                <span className="text-brand-accent-500">HARRISON</span>
              </h3>

              <div className="mb-7 h-px bg-brand-primary-700" />

              <div className="flex flex-col gap-6">
                {franchisePerks.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="border-l border-brand-accent-500/40 pl-4"
                  >
                    <p className="mb-1 text-sm font-semibold text-white">
                      {title}
                    </p>

                    <p className="text-xs leading-[1.9] text-brand-accent-200">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right photo stack */}
          <div className="flex flex-col gap-1">
            <div className="relative min-h-[180px] flex-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop"
                alt="Partnership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/80">
                Partnership
              </p>
            </div>

            <div className="relative min-h-[180px] flex-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop"
                alt="Growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/80">
                Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────
export default function HarrisonHouseBrandPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Hero />
      <WhatWeDo />
      {/* <Mission /> */}
      <MenuHighlights />
      <DiningExperience />
      <ExpansionFranchise />
      <FutureBrandsPage />
    </div>
  );
}
