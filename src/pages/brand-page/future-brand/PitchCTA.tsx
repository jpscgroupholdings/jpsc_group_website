import { useState } from "react";
import { FadeUp } from "../components/FadeUp";

// ── PITCH CTA ─────────────────────────────────────────────────────
export function PitchCTA() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="py-24 px-14 bg-[#EDE8E0]">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#9a7c5c] mb-3.5">
            04 · Collaborate
          </p>
        </FadeUp>
 
        <div className="flex items-end justify-between gap-12">
          <FadeUp className="flex-1">
            <h2 className="font-['Playfair_Display'] text-[clamp(36px,4.5vw,68px)] font-black leading-none text-[#1C1C1A]">
              HAVE A<br />BRAND<br />
              <span className="text-[#ef4501]">IDEA ?</span>
            </h2>
          </FadeUp>
 
          <FadeUp delay={0.15} className="flex-1 max-w-[400px]">
            <p className="text-[13px] leading-[1.95] text-[#7a6a58] mb-8">
              The Harrison Group is open to co-developing concepts with
              passionate founders. If you have a food or lifestyle brand idea
              that aligns with Filipino culture and community, let's talk.
            </p>
            <div className="h-px bg-[#D0C4B4] mb-8" />
            <div
              className="flex items-center justify-between cursor-default p-5 px-7 transition-colors duration-300"
              style={{ background: hovered ? "#ef4501" : "#1C1C1A" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0EB]">
                Submit a Brand Pitch
              </p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M12 6L16 10L12 14"
                  stroke="#F5F0EB"
                  strokeWidth="1.2"
                  className="transition-transform duration-300"
                  style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}
                />
              </svg>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
 