"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Heart,
  Users,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import outreach1 from "../assets/CSRInitiatives/DSC_0840.png";
import outreach2 from "../assets/CSRInitiatives/DSC_0844.png";
import outreach3 from "../assets/CSRInitiatives/DSC_0845.png"
import outreach4 from "../assets/CSRInitiatives/DSC_0848.png";
import outreach5 from "../assets/CSRInitiatives/orp_team.png";
import outreach6 from "../assets/CSRInitiatives/orp_team1.png";
import outreach7 from "../assets/CSRInitiatives/orphanage.png";
import outreach8 from "../assets/CSRInitiatives/Buscalan/buscalan.png";
import outreach9 from "../assets/CSRInitiatives/Buscalan/buscalan1.png";

import people1 from "../assets/workplace/people1.jpg"
import people2 from "../assets/workplace/people2.jpg"
import people3 from "../assets/workplace/people3.jpg"
import people4 from "../assets/workplace/people4.jpg"
import people5 from "../assets/workplace/people5.jpg"
import people6 from "../assets/workplace/people6.jpg"
import people7 from "../assets/workplace/people7.jpg"
import people8 from "../assets/workplace/people8.jpg"
import people9 from "../assets/workplace/people9.jpg"
import { Link } from "react-router-dom";


// =======================TYPES ======================
interface EmployeeProgramsType {
  tag: string;
  title: string;
  desc: string;
  img: string;
  images: string[];
}

export type GalleryCategory = "All" | "Outreach" | "Employee" | "Events";

interface GalleryImage {
  img: string;
  caption?: string; // optional override
  wide?: boolean;
}

interface GalleryGroup {
  category: GalleryCategory;
  caption: string; // default caption
  items: GalleryImage[];
}

export interface GalleryFlatItem {
  img: string;
  caption: string;
  category: GalleryCategory;
  wide?: boolean;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const sections = [
  { id: "outreach", label: "Community Outreach", icon: Heart },
  { id: "employee", label: "Employee Engagement", icon: Users },
  { id: "gallery", label: "Corporate Gallery", icon: Camera },
];

const outreachPrograms = [
  {
    id: "orphanage",
    tag: "Orphanage Outreach",
    title: "Heart in Action: JPSC Group's Orphanage Outreach 2025",
    desc: "Our orphanage outreach is one of the ways we extend care beyond business — sharing meals, moments, and meaningful experiences with children through simple acts of kindness. Through every visit, we hope to bring comfort, joy, and a reminder that they are seen, valued, and never alone.",
    img: outreach7,
    color: "#e8f4ec",
    accent: "#2e7d54",
  },
  {
    id: "donations",
    tag: "Donations Drive",
    title: "Goods That Make a Difference",
    desc: "Twice a year, we organize company-wide donation drives collecting clothing, school supplies, toiletries, and non-perishable goods. Items are sorted, packed, and personally delivered by our teams to ensure every donation reaches the right hands.",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=900&q=80&fit=crop",
    color: "#e8f0fb",
    accent: "#174674",
  },
  {
    id: "community-meals",
    tag: "Community Meals",
    title: "Cooking and Sharing Meals Together",
    desc: "Beyond food distribution, we organize community cooking days where volunteers and residents prepare meals together. These shared spaces create connection, dignity, and a sense of ownership — turning every meal into a collective effort rather than a one-way act of giving.",
    img: outreach9,
    color: "#fdf0e8",
    accent: "#a0522d",
  },
];

const employeePrograms: EmployeeProgramsType[] = [
  {
    tag: "Team Building",
    title: "Bonds Built Beyond the Office",
    desc: "Our annual team-building retreats take employees out of their desks and into experiences designed to spark collaboration, trust, and laughter. From outdoor challenges to creative workshops, we invest in the people behind the work.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&fit=crop",
      people1,
      people2,
      people3,
      people4,
      people5,
      people6,
      people7,
      people8,
      people9,
    ],
  },
  {
    tag: "Corporate Events",
    title: "Celebrating Milestones Together",
    desc: "From anniversary galas to quarterly townhalls, our corporate events honor our journey and align our people around a shared vision. These gatherings are where stories are shared, achievements are recognized, and culture is lived.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80&fit=crop",
    ],
  },
  {
    tag: "Volunteer Days",
    title: "Every Employee, a Community Hero",
    desc: "We give each employee four paid volunteer days per year to participate in CSR activities of their choosing. Whether they join a feeding mission, a coastal cleanup, or a school mentorship — the choice is theirs.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80&fit=crop",
    ],
  },
];

export const galleryItems: GalleryGroup[] = [
  {
    category: "Outreach",
    caption: "Company Outreach Worldwide",
    items: [
      {
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&fit=crop",
        caption: "Barangay Outreach Mission — Q1 2024",
        wide: true,
      },
      // {
      //   img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&fit=crop",
      //   caption: "Monthly Feeding Drive — Taguig",
      // },
      {
        img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80&fit=crop",
        caption: "Holiday Donations Drive",
      },
      {
        img: outreach1,
        caption: "Hearts in Action",
      },
      {
        img: outreach2,
      },
      {
        img: outreach3,
      },
      {
        img: outreach4,
      },
      {
        img: outreach5,
      },
      {
        img: outreach6
      },
      {
        img: outreach7,
      },
      {
        img: outreach8,
      },
      {
        img: outreach9,
      },
    ],
  },

  {
    category: "Employee",
    caption: "Employee Engagement & Collaboration",
    items: [
      {
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop",
        caption: "Annual Team Building 2024",
      },
      {
        img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80&fit=crop",
        caption: "Volunteer Day — Coastal Cleanup",
        wide: true,
      },
      {
        img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80&fit=crop",
        caption: "Team Outing — Batangas 2024",
      },

      { img: people1, },
      { img: people2, },
      { img: people3, },
      { img: people4, },
      { img: people5, },
      { img: people6, },
      { img: people7, },
      { img: people8 },
      { img: people9, },
    ],
  },

  {
    category: "Events",
    caption: "Corporate Events & Celebrations",
    items: [
      {
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop",
        caption: "10th Anniversary Gala",
        wide: true,
      },
      {
        img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80&fit=crop",
        caption: "Q4 Company Townhall",
      },
      {
        img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&fit=crop",
        caption: "Mid-Year Celebration",
      },
    ],
  },
];


export const flattenedGalleryItems: GalleryFlatItem[] = galleryItems.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    category: group.category,
    caption: item.caption ?? group.caption,
  }))
);

 export const galleryCategories: GalleryCategory[] = [
    "All",
    ...new Set(flattenedGalleryItems.map((i) => i.category)),
  ];

// ─── SCROLL STRIP ─────────────────────────────────────────────────────────────

function ScrollStrip({
  images,
  label,
  idx,
  onSelect,
}: {
  images: string[];
  label: string;
  idx: number;
  onSelect: (i: number) => void;
}) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [idx]);

  const go = (dir: 1 | -1) =>
    onSelect(Math.max(0, Math.min(images.length - 1, idx + dir)));

  return (
    <div className="relative mt-3">
      <div
        className="flex gap-2 overflow-x-auto pb-1"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onClick={() => onSelect(i)}
            className={`flex-none h-28 rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
              i === idx
                ? "border-[#174674] opacity-100"
                : "border-slate-100 opacity-75 hover:opacity-95"
            }`}
          >
            <img
              src={src}
              alt={`${label} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 2 && (
        <div className="flex gap-2 mt-2 justify-end">
          <button
            onClick={() => go(-1)}
            disabled={idx === 0}
            className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center disabled:opacity-30 hover:bg-slate-100 transition"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#0d2d4a]" />
          </button>
          <button
            onClick={() => go(1)}
            disabled={idx === images.length - 1}
            className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center disabled:opacity-30 hover:bg-slate-100 transition"
          >
            <ChevronRight className="w-3.5 h-3.5 text-[#0d2d4a]" />
          </button>
        </div>
      )}
    </div>
  );
}
// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────

function Lightbox({
  items,
  startIdx,
  onClose,
}: {
  items: GalleryFlatItem[];
  startIdx: number;
  onClose: () => void;
}) {
  const [cur, setCur] = useState(startIdx);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setCur((c) => Math.min(items.length - 1, c + 1));
      if (e.key === "ArrowLeft") setCur((c) => Math.max(0, c - 1));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [items.length, onClose]);

  const item = items[cur];

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#060f18]/90 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <img
            src={item.img}
            alt={item.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d2d4a]/80 to-transparent px-5 py-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/60">
              {item.category}
            </span>
            <p className="text-sm font-medium text-white mt-0.5">
              {item.caption}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setCur((c) => Math.max(0, c - 1))}
            disabled={cur === 0}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white disabled:opacity-25 transition"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <span className="text-xs text-white/40">
            {cur + 1} / {items.length}
          </span>
          <button
            onClick={() => setCur((c) => Math.min(items.length - 1, c + 1))}
            disabled={cur === items.length - 1}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white disabled:opacity-25 transition"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div
          className="flex gap-2 mt-3 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((it, i) => (
            <div
              key={it.img}
              onClick={() => setCur(i)}
              className={`flex-none w-16 h-11 rounded-lg overflow-hidden cursor-pointer border-2 transition ${i === cur ? "border-[#174674]" : "border-transparent opacity-50 hover:opacity-80"}`}
            >
              <img src={it.img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SECTION HEADERS ──────────────────────────────────────────────────────────

function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-6 bg-[#174674]" />
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#174674]">
          {tag}
        </span>
      </div>
      <h2 className="font-playfair text-3xl font-bold leading-tight text-[#0d2d4a] lg:text-4xl mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm leading-relaxed text-slate-500 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── COMMUNITY OUTREACH SECTION ───────────────────────────────────────────────

function OutreachSection() {
  return (
    <section id="outreach" className="py-20 bg-white scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          tag="Community Outreach"
          title={
            <>
              Serving those{" "}
              <em className="font-normal italic text-[#174674]">
                who need it most.
              </em>
            </>
          }
          subtitle="Our outreach programs connect our people to the communities that surround us — delivering food, goods, healthcare, and above all, dignity."
        />

        {/* Featured card — large */}
        <div
          className="relative rounded-2xl overflow-hidden mb-5"
          style={{ background: outreachPrograms[0].color }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.12em] mb-3 block"
                style={{ color: outreachPrograms[0].accent }}
              >
                {outreachPrograms[0].tag}
              </span>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#0d2d4a] leading-snug mb-4">
                {outreachPrograms[0].title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-6">
                {outreachPrograms[0].desc}
              </p>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={outreachPrograms[0].img}
                alt={outreachPrograms[0].tag}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Two smaller cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {outreachPrograms.slice(1).map((p) => (
            <div
              key={p.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: p.color }}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.tag}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.12em] mb-2 block"
                  style={{ color: p.accent }}
                >
                  {p.tag}
                </span>
                <h3 className="font-playfair text-xl font-bold text-[#0d2d4a] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500 mb-4">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EMPLOYEE ENGAGEMENT SECTION ──────────────────────────────────────────────

function EmployeeCard({ p, i }: { p: EmployeeProgramsType; i: number }) {
  const [idx, setIdx] = useState(0);
  const isEven = i % 2 === 0;

  const imagePanel = (
    <div className="relative h-52 lg:h-auto overflow-hidden">
      <img
        key={p.images[idx]} // key swap triggers fade if you add CSS transition
        src={p.images[idx]} // ← active image drives this panel
        alt={p.tag}
        className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
      />
    </div>
  );

  const textPanel = (
    <div className="p-7 lg:p-9 flex flex-col justify-between">
      <div>
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#174674] mb-2 block">
          {p.tag}
        </span>
        <h3 className="font-playfair text-2xl font-bold text-[#0d2d4a] mb-3 leading-snug">
          {p.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-500 mb-4">{p.desc}</p>
      </div>
      <ScrollStrip
        images={p.images}
        label={p.tag}
        idx={idx}
        onSelect={setIdx}
      />
    </div>
  );

  return (
    <div
      className={`grid overflow-hidden rounded-2xl border border-slate-100 bg-white ${
        isEven ? "lg:grid-cols-[1fr_340px]" : "lg:grid-cols-[340px_1fr]"
      }`}
    >
      {isEven ? (
        <>
          {textPanel}
          {imagePanel}
        </>
      ) : (
        <>
          {imagePanel}
          {textPanel}
        </>
      )}
    </div>
  );
}

function EmployeeSection() {
  return (
    <section id="employee" className="py-20 bg-[#f6f9fd] scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          tag="Employee Engagement"
          title={
            <>
              Our people are our{" "}
              <em className="font-normal italic text-[#174674]">
                greatest program.
              </em>
            </>
          }
          subtitle="We invest in the wellbeing, bonds, and purpose of every team member — because a company's culture is its most visible CSR act."
        />
        <div className="space-y-5">
          {employeePrograms.map((p, i) => (
            <EmployeeCard key={p.tag} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY SECTION ──────────────────────────────────────────────────────────

function GallerySection() {
  const LIMIT = 9;
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = flattenedGalleryItems.filter(
    (item) => filter === "All" || item.category === filter,
  );


  const visible = filtered.slice(0, LIMIT);


  return (
    <section id="gallery" className="py-20 bg-[#0d2d4a] scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-white/40" />
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">
              Corporate Gallery
            </span>
          </div>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            Moments that{" "}
            <em className="font-normal italic text-white/60">define us.</em>
          </h2>
          <p className="text-sm leading-relaxed text-white/50 max-w-xl">
            A living record of our programs, our people, and the communities we
            serve. Every photo tells a story worth telling.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? "bg-white text-[#0d2d4a]"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid — visible items only */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {visible.map((item, i) => (
            <div
              key={`${filter}-${i}`}
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer relative group"
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={item.img}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover ${item.wide ? "h-56" : "h-44"}`}
              />
              {/* Hover overlay — opacity only, no scale (avoids scroll repaint) */}
              <div className="absolute inset-0 bg-[#0d2d4a]/0 group-hover:bg-[#0d2d4a]/50 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/70 mb-1">
                    {item.category}
                  </p>
                  <p className="text-sm font-medium text-white leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d2d4a]/70 to-transparent px-3 py-2 pointer-events-none">
                <p className="text-[10px] text-white/60">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        {filtered.length > LIMIT && (
          <div className="mt-8 text-center">
            <Link
              to="/csr-gallery"
              className="px-6 py-2.5 rounded-full bg-white/10 text-white/70 text-sm font-medium hover:bg-white/20 hover:text-white transition-all"
            >
              View all {filtered.length} photos
            </Link>
          </div>
        )}

        {lightboxIdx !== null && (
          <Lightbox
            items={visible}
            startIdx={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </div>
    </section>
  );
}
// ─── NAV ──────────────────────────────────────────────────────────────────────

function StickyNav({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-16 md:top-24 z-30 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div
        className="mx-auto max-w-6xl px-6 lg:px-10 flex items-center gap-1 overflow-x-auto py-3"
        style={{ scrollbarWidth: "none" }}
      >
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              active === id
                ? "bg-[#0d2d4a] text-white"
                : "text-slate-500 hover:text-[#0d2d4a] hover:bg-slate-100"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <div
      id="csr"
      className="relative h-[420px] lg:h-[500px] overflow-hidden scroll-mt-32"
    >
      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&q=80&fit=crop"
        alt="CSR Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d4a]/85 via-[#0d2d4a]/50 to-[#0d2d4a]/20" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 pb-14 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6 bg-white/50" />
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
            Corporate Social Responsibility
          </span>
        </div>
        <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 max-w-2xl">
          Where business{" "}
          <em className="font-normal italic text-white/70">meets humanity.</em>
        </h1>
        <p className="text-sm lg:text-base text-white/60 max-w-md leading-relaxed">
          Explore the programs, people, and moments behind our commitment to
          building communities that thrive alongside us.
        </p>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function CSRPage() {
  // 1. Initialize from URL hash, fallback to first section
  const getInitialSection = () => {
    const hash = window.location.hash.replace("#", "");
    return sections.some((s) => s.id === hash) ? hash : sections[0].id;
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);

  // 2. On mount, scroll to the hashed section if present
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay ensures DOM is ready
    }
  }, []);

  // 3. Observer updates both state AND the URL hash
   useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            history.replaceState(null, "", `#${id}`); // ← updates URL silently
          }
        },
        {
          threshold: 0,
          rootMargin: "-30% 0px -60% 0px",
        },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans scroll-mt-32">
      <PageHero />
      <StickyNav active={activeSection} />
      <OutreachSection />
      <EmployeeSection />
      <GallerySection />

      {/* Footer Section (Soft CTA / Brand Close) */}
      <section className="py-20 bg-[#f6f9fd] text-center px-6">
        <h2 className="font-playfair text-3xl font-semibold text-[#0d2d4a] mb-3">
          Exploring Opportunities Across Industries
        </h2>

        <p className="text-sm text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
          Our portfolio continues to evolve across consulting, technology, food,
          and global expansion—built with a long-term vision for sustainable
          growth.
        </p>

        {/* Primary (still soft) */}
        <a
          href="/business-portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-[#174674] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d2d4a] transition"
        >
          View All Divisions
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
