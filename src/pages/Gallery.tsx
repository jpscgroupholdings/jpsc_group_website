"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Search, Grid3X3, Rows3 } from "lucide-react";
import { flattenedGalleryItems, galleryCategories, GalleryCategory, GalleryFlatItem } from "./CSRInitiatives";

// ─── TYPES ────────────────────────────────────────────────────────────────────



// ─── DATA ─────────────────────────────────────────────────────────────────────


// ─── FLAT LIST ────────────────────────────────────────────────────────────────


const CATEGORY_META: Record<string, { label: string; count: number; color: string }> = {
  All: { label: "All Photos", count: flattenedGalleryItems.length, color: "#174674" },
  Outreach: {
    label: "Community Outreach",
    count: flattenedGalleryItems.filter((i) => i.category === "Outreach").length,
    color: "#2e7d54",
  },
  Employee: {
    label: "Employee Engagement",
    count: flattenedGalleryItems.filter((i) => i.category === "Employee").length,
    color: "#174674",
  },
  Events: {
    label: "Corporate Events",
    count: flattenedGalleryItems.filter((i) => i.category === "Events").length,
    color: "#7c3d12",
  },
};

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
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCur((c) => Math.min(items.length - 1, c + 1));
      if (e.key === "ArrowLeft") setCur((c) => Math.max(0, c - 1));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [items.length, onClose]);

  useEffect(() => {
    const el = thumbRef.current?.children[cur] as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [cur]);

  const item = items[cur];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(6,15,24,0.96)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span
              className="text-[10px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {item.category}
            </span>
            <p className="text-sm font-medium text-white mt-0.5">{item.caption}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {cur + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center transition"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img
            key={cur}
            src={item.img}
            alt={item.caption}
            className="w-full h-full object-cover"
            style={{ animation: "fadeIn 0.2s ease" }}
          />
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={() => setCur((c) => Math.max(0, c - 1))}
            disabled={cur === 0}
            className="flex items-center gap-2 text-sm transition disabled:opacity-20"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={() => setCur((c) => Math.min(items.length - 1, c + 1))}
            disabled={cur === items.length - 1}
            className="flex items-center gap-2 text-sm transition disabled:opacity-20"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div
          ref={thumbRef}
          className="flex gap-2 mt-3 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((it, i) => (
            <div
              key={`${it.img}-${i}`}
              onClick={() => setCur(i)}
              className="flex-none w-16 h-11 rounded-lg overflow-hidden cursor-pointer transition-all"
              style={{
                border: i === cur ? "2px solid #fff" : "2px solid transparent",
                opacity: i === cur ? 1 : 0.45,
              }}
            >
              <img src={it.img} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}

// ─── MASONRY GRID ─────────────────────────────────────────────────────────────

function MasonryGrid({
  items,
  onOpen,
}: {
  items: GalleryFlatItem[];
  onOpen: (i: number) => void;
}) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
      {items.map((item, i) => (
        <div
          key={`${item.img}-${i}`}
          className="break-inside-avoid mb-3 rounded-xl overflow-hidden cursor-pointer relative group"
          onClick={() => onOpen(i)}
          style={{ willChange: "auto" }}
        >
          <img
            src={item.img}
            alt={item.caption}
            loading="lazy"
            decoding="async"
            className="w-full object-cover block"
            style={{ height: item.wide ? "220px" : "170px" }}
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-end transition-opacity duration-250 opacity-0 group-hover:opacity-100"
            style={{ background: "linear-gradient(to top, rgba(13,45,74,0.85) 0%, rgba(13,45,74,0.2) 60%, transparent 100%)" }}
          >
            <div className="px-3 pb-3">
              <span
                className="text-[9px] font-medium uppercase tracking-[0.1em] block mb-0.5"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {item.category}
              </span>
              <p className="text-xs font-medium text-white leading-snug">{item.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── GRID VIEW (uniform) ──────────────────────────────────────────────────────

function UniformGrid({
  items,
  onOpen,
}: {
  items: GalleryFlatItem[];
  onOpen: (i: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {items.map((item, i) => (
        <div
          key={`${item.img}-${i}`}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
          onClick={() => onOpen(i)}
        >
          <img
            src={item.img}
            alt={item.caption}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover block"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end transition-opacity duration-250 opacity-0 group-hover:opacity-100"
            style={{ background: "linear-gradient(to top, rgba(13,45,74,0.85) 0%, transparent 70%)" }}
          >
            <div className="px-2.5 pb-2.5">
              <p className="text-[11px] font-medium text-white leading-snug line-clamp-2">{item.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── CATEGORY STRIP ───────────────────────────────────────────────────────────

function CategoryStrip({
  active,
  onChange,
}: {
  active: GalleryCategory;
  onChange: (c: GalleryCategory) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {galleryCategories.map((cat) => {
        const meta = CATEGORY_META[cat];
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              background: isActive ? "#0d2d4a" : "rgba(13,45,74,0.07)",
              color: isActive ? "#fff" : "#0d2d4a",
              border: isActive ? "1.5px solid #0d2d4a" : "1.5px solid rgba(13,45,74,0.12)",
            }}
          >
            {meta.label}
            <span
              className="text-[11px] px-1.5 py-0.5 rounded-full font-medium"
              style={{
                background: isActive ? "rgba(255,255,255,0.15)" : "rgba(13,45,74,0.08)",
                color: isActive ? "rgba(255,255,255,0.8)" : "#174674",
              }}
            >
              {meta.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"masonry" | "grid">("masonry");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = flattenedGalleryItems.filter((item) => {
    const matchCat = filter === "All" || item.category === filter;
    const matchSearch =
      search.trim() === "" ||
      item.caption.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    setLightboxIdx(null);
  }, [filter, search]);

  const handleFilterChange = useCallback((cat: GalleryCategory) => {
    setFilter(cat);
  }, []);

  // Group by category for "All" view heading display
  const categoryGroups =
    filter === "All"
      ? galleryCategories.slice(1).map((cat) => ({
          cat,
          label: CATEGORY_META[cat].label,
          items: filtered.filter((i) => i.category === cat),
        })).filter((g) => g.items.length > 0)
      : null;

  return (
    <div className="min-h-screen bg-[#f6f9fd] font-sans">
      {/* ── HERO HEADER ── */}
      <div className="bg-[#0d2d4a] pt-12 pb-10 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Back link */}
          <a
            href="/csr-initiatives#csr"
            className="inline-flex items-center gap-2 text-xs font-medium mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to CSR
          </a>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-white/30" />
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.14em]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Corporate Gallery
                </span>
              </div>
              <h1
                className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
              >
                Every photo,{" "}
                <em className="font-normal italic" style={{ color: "rgba(255,255,255,0.55)" }}>
                  every story.
                </em>
              </h1>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                {flattenedGalleryItems.length} photos across {galleryCategories.length - 1} categories
              </p>
            </div>

            {/* Search */}
            <div className="relative lg:w-72">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "rgba(255,255,255,0.35)" }}
              />
              <input
                type="text"
                placeholder="Search photos…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full text-sm outline-none transition"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── STICKY FILTER BAR ── */}
      <div
        className="sticky top-0 z-20 border-b px-6 lg:px-10 py-3"
        style={{
          background: "rgba(246,249,253,0.97)",
          backdropFilter: "blur(8px)",
          borderColor: "rgba(13,45,74,0.08)",
        }}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-4">
          <CategoryStrip active={filter} onChange={handleFilterChange} />
          {/* View toggle */}
          <div
            className="flex items-center gap-1 p-1 rounded-lg flex-shrink-0"
            style={{ background: "rgba(13,45,74,0.07)" }}
          >
            <button
              onClick={() => setViewMode("masonry")}
              className="p-1.5 rounded-md transition"
              style={{
                background: viewMode === "masonry" ? "#0d2d4a" : "transparent",
                color: viewMode === "masonry" ? "#fff" : "#174674",
              }}
              title="Masonry"
            >
              <Rows3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className="p-1.5 rounded-md transition"
              style={{
                background: viewMode === "grid" ? "#0d2d4a" : "transparent",
                color: viewMode === "grid" ? "#fff" : "#174674",
              }}
              title="Grid"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-400 text-sm">No photos found for "{search}"</p>
            <button
              onClick={() => { setSearch(""); setFilter("All"); }}
              className="mt-4 text-xs text-[#174674] underline underline-offset-2"
            >
              Clear filters
            </button>
          </div>
        ) : categoryGroups && viewMode === "masonry" ? (
          /* ── All categories: grouped sections ── */
          <div className="space-y-14">
            {categoryGroups.map(({ cat, label, items }) => (
              <div key={cat}>
                {/* Section heading */}
                <div className="flex items-center gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="h-px w-5 bg-[#174674]" />
                      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#174674]">
                        {cat}
                      </span>
                    </div>
                    <h2 className="font-playfair text-2xl font-bold text-[#0d2d4a]">
                      {label}
                    </h2>
                  </div>
                  <span
                    className="ml-auto text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: "rgba(23,70,116,0.08)", color: "#174674" }}
                  >
                    {items.length} photos
                  </span>
                  <button
                    onClick={() => setFilter(cat)}
                    className="text-xs font-medium text-[#174674] underline underline-offset-2 hover:opacity-70 transition"
                  >
                    View all
                  </button>
                </div>
                <MasonryGrid
                  items={items}
                  onOpen={(i) => {
                    // Map local index back to global filtered index
                    const globalIdx = filtered.indexOf(items[i]);
                    setLightboxIdx(globalIdx >= 0 ? globalIdx : i);
                  }}
                />
              </div>
            ))}
          </div>
        ) : categoryGroups && viewMode === "grid" ? (
          <div className="space-y-14">
            {categoryGroups.map(({ cat, label, items }) => (
              <div key={cat}>
                <div className="flex items-center gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="h-px w-5 bg-[#174674]" />
                      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#174674]">{cat}</span>
                    </div>
                    <h2 className="font-playfair text-2xl font-bold text-[#0d2d4a]">{label}</h2>
                  </div>
                  <span
                    className="ml-auto text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: "rgba(23,70,116,0.08)", color: "#174674" }}
                  >
                    {items.length} photos
                  </span>
                  <button
                    onClick={() => setFilter(cat)}
                    className="text-xs font-medium text-[#174674] underline underline-offset-2 hover:opacity-70 transition"
                  >
                    View all
                  </button>
                </div>
                <UniformGrid
                  items={items}
                  onOpen={(i) => {
                    const globalIdx = filtered.indexOf(items[i]);
                    setLightboxIdx(globalIdx >= 0 ? globalIdx : i);
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          /* ── Single category or search result ── */
          <div>
            {/* Results bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500">
                {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
                {search && (
                  <> matching <strong className="text-[#0d2d4a]">"{search}"</strong></>
                )}
              </p>
              {(filter !== "All" || search) && (
                <button
                  onClick={() => { setFilter("All"); setSearch(""); }}
                  className="text-xs text-[#174674] underline underline-offset-2 hover:opacity-70 transition"
                >
                  Clear
                </button>
              )}
            </div>
            {viewMode === "masonry" ? (
              <MasonryGrid items={filtered} onOpen={setLightboxIdx} />
            ) : (
              <UniformGrid items={filtered} onOpen={setLightboxIdx} />
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          items={filtered}
          startIdx={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </div>
  );
}