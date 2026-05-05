import { Hero } from "./future-brand/FutureBrandHero";
import { IncubationProcess } from "./future-brand/IncubationProcess";
import { PitchCTA } from "./future-brand/PitchCTA";
import { Ventures } from "./future-brand/Ventures";

// ── ROOT ──────────────────────────────────────────────────────────
export default function FutureBrandsPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Hero />
      <Ventures />
      <IncubationProcess />
      <PitchCTA />
    </div>
  );
}
