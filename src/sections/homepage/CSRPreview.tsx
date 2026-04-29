"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, X, Download } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ModalData {
  img: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
  stats: { num: string; label: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80&fit=crop",
    alt: "Feeding program",
    label: "Feeding",
    // smallest → starts the arc
    size: { width: 82, height: 70 },
    position: "top-[10%] right-[36%]",
    rotate: "-rotate-[24deg]",
    rounded: "rounded-xl",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80&fit=crop",
    alt: "Skills training",
    label: "Training",
    size: { width: 108, height: 92 },
    position: "top-[6%] right-[20%]",
    rotate: "rotate-[4deg]",
    rounded: "rounded-[14px]",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80&fit=crop",
    alt: "Livelihood program",
    label: "Livelihood",
    size: { width: 136, height: 116 },
    position: "top-[4%] right-[4%]",
    rotate: "-rotate-[3deg]",
    rounded: "rounded-[16px]",
  },
  {
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&q=80&fit=crop",
    alt: "Community outreach",
    label: "Outreach",
    // largest → anchors the arc
    size: { width: 165, height: 138 },
    position: "top-[40%] right-[1%]",
    rotate: "rotate-[2deg]",
    rounded: "rounded-[18px]",
  },
];

const heroStats = [
  { num: "5,000+", label: "beneficiaries served" },
  { num: "30+",    label: "communities reached" },
  { num: "12",     label: "active programs" },
];

const programs = [
  {
    id: "livelihood",
    tag: "Livelihood",
    title: "Skills & Livelihood Training",
    desc: "Equipping community members with practical skills — from food preparation to basic finance — so they can build sustainable income.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80&fit=crop",
    alt: "Skills training",
  },
  {
    id: "outreach",
    tag: "Outreach",
    title: "Community Care & Outreach",
    desc: "Regular missions providing goods, medical aid, and emotional support to underserved barangays across our operating areas.",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80&fit=crop",
    alt: "Community outreach",
  },
];

const modalContent: Record<string, ModalData> = {
  main: {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80&fit=crop",
    alt: "CSR overview",
    tag: "CSR Overview",
    title: "Our Commitment to Community",
    desc: "Across all our subsidiaries — banking, consulting, technology, and dining — we share one belief: business growth must translate to community growth. Our CSR programs focus on livelihood, outreach, and empowerment of the most vulnerable Filipinos near our communities.",
    stats: [
      { num: "5,000+", label: "total beneficiaries" },
      { num: "12",     label: "active programs" },
      { num: "₱8M+",  label: "invested in communities" },
    ],
  },
  livelihood: {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=900&q=80&fit=crop",
    alt: "Skills training",
    tag: "Livelihood Program",
    title: "Skills & Livelihood Training",
    desc: "Our livelihood program provides hands-on training in food preparation, basic business management, and financial literacy to community members who lack access to formal employment. Participants graduate with a starter kit and ongoing mentorship from our employee volunteers.",
    stats: [
      { num: "2,400+", label: "graduates trained" },
      { num: "78%",    label: "found stable income" },
      { num: "15",     label: "partner barangays" },
    ],
  },
  outreach: {
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80&fit=crop",
    alt: "Community outreach",
    tag: "Community Outreach",
    title: "Community Care & Outreach",
    desc: "Every quarter, our employee volunteers mobilize to bring relief goods, free medical consultations, and livelihood starter packs to underserved communities near our offices. This program is driven entirely by our people — a reflection of a company culture rooted in service.",
    stats: [
      { num: "30+",    label: "communities served" },
      { num: "5,000+", label: "beneficiaries reached" },
      { num: "4×",     label: "missions per year" },
    ],
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function CSRModal({
  data,
  onClose,
}: {
  data: ModalData | null;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d2d4a]/60 px-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0d2d4a] shadow transition hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={data.img}
            alt={data.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d2d4a]/30" />
        </div>

        {/* Body */}
        <div className="p-7">
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#174674]">
            {data.tag}
          </p>
          <h3 className="mb-3 font-playfair text-2xl font-bold text-[#0d2d4a]">
            {data.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-500">
            {data.desc}
          </p>

          {/* Stats */}
          <div className="mb-6 flex gap-6 rounded-xl bg-[#f0f5fb] px-5 py-4">
            {data.stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && (
                  <div className="w-px self-stretch bg-slate-200" />
                )}
                <div>
                  <p className="font-playfair text-2xl font-bold text-[#174674]">
                    {s.num}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{s.label}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* CTA */}
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#174674] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0d2d4a]">
            <Download className="h-4 w-4" />
            Download full program report
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CSRPreview() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[90rem] space-y-12">

          {/* ── Header ── */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[#174674]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#174674]">
                  Corporate Social Responsibility
                </span>
              </div>
              <h2 className="font-playfair text-4xl font-bold leading-[1.15] text-[#0d2d4a] lg:text-5xl">
                Uplifting lives,{" "}
                <em className="font-normal italic text-[#174674]">
                  one community at a time.
                </em>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-sm leading-[1.85] text-slate-500 lg:max-w-sm">
                We believe a thriving business must create a thriving community.
                Through our outreach and livelihood programs, we invest directly
                in the people who need it most — providing skills, support, and
                opportunity.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => openModal("main")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#174674] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#0d2d4a]"
                >
                  See our full CSR report
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => openModal("main")}
                  className="text-xs font-medium text-[#174674] underline underline-offset-4 transition hover:text-[#0d2d4a]"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* ── Hero with floating images ── */}
          <div className="relative">
            {/* Main hero */}
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80&fit=crop"
                alt="Community outreach volunteers"
                className="h-full w-full object-cover"
              />
              {/* Gradient overlay — left-heavy so quote is readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d4a]/75 via-[#0d2d4a]/30 to-[#0d2d4a]/10" />
            </div>

            {/* Quote overlay */}
            <div className="absolute left-7 top-1/2 z-20 max-w-[260px] -translate-y-1/2">
              <p className="font-playfair text-xl italic leading-snug text-white">
                "When people have the tools to stand on their own, communities
                transform."
              </p>
              <p className="mt-2 text-[11px] tracking-wide text-white/60">
                — Our CSR Mission Statement
              </p>
            </div>

            {/* Dashed arc SVG — traces the spiral path */}
            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              viewBox="0 0 900 360"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 330 58 Q 410 28 500 40 Q 600 20 680 36 Q 770 28 820 78 Q 876 118 888 195"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
            </svg>

            {/* Floating service images — small → large spiral arc */}
            {floatingImages.map((fi) => (
              <div
                key={fi.label}
                style={{ width: fi.size.width, height: fi.size.height }}
                className={`
                  absolute border border-white
                  shadow-[0_8px_28px_rgba(13,45,74,0.30)]
                  ${fi.position} ${fi.rotate} ${fi.rounded}
                `}
              >
                <img
                  src={fi.src}
                  alt={fi.alt}
                  className={`h-full w-full object-cover ${fi.rounded}`}
                />
                <div className="absolute -bottom-6 left-0 right-0 bg-[#0d2d4a]/72 px-2 py-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.09em] text-white">
                    {fi.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Stats bar */}
            <div className="absolute bottom-5 left-6 z-20 flex gap-7">
              {heroStats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && (
                    <div className="w-px self-stretch bg-white/25" />
                  )}
                  <div>
                    <p className="font-playfair text-[1.6rem] font-bold leading-none text-white">
                      {s.num}
                    </p>
                    <p className="mt-1 text-[10.5px] text-white/65">{s.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Program cards ── */}
          <div className="grid gap-4 sm:grid-cols-2">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => openModal(p.id)}
                className="group grid overflow-hidden rounded-[18px] border border-slate-100 text-left transition hover:shadow-[0_6px_24px_rgba(23,70,116,0.10)] sm:grid-cols-[120px_1fr]"
              >
                {/* Image */}
                <div className="h-36 overflow-hidden sm:h-full">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between p-5">
                  <div>
                    <p className="mb-1.5 text-[9.5px] font-medium uppercase tracking-[0.1em] text-[#174674]">
                      {p.tag}
                    </p>
                    <h3 className="font-playfair mb-2 text-[1rem] font-bold leading-snug text-[#0d2d4a]">
                      {p.title}
                    </h3>
                    <p className="text-[12px] leading-[1.7] text-slate-500">
                      {p.desc}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11.5px] font-medium text-[#174674]">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Modal ── */}
      <CSRModal
        data={activeModal ? modalContent[activeModal] : null}
        onClose={closeModal}
      />
    </>
  );
}