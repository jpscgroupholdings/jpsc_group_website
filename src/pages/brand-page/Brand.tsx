import { Hero } from "./components/BrandHero";
import { DiningExperience } from "./components/DiningExperience";
import { ExpansionFranchise } from "./components/ExpansionFranchise";
import { MenuHighlights } from "./components/MenuHighLights";
import { WhatWeDo } from "./components/WhatWeDo";
import FutureBrandsPage from "./FutureBrands";

// ── ROOT ──────────────────────────────────────────────────────────
export default function HarrisonHouseBrandPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Hero />
      <WhatWeDo />
      <MenuHighlights />
      <DiningExperience />
      <ExpansionFranchise  />
      <FutureBrandsPage />
    </div>
  );
}
