import Whoarewe from "@/pages/AboutPage/components/Whoarewe";
import Ourhistory from "@/pages/AboutPage/components/Ourhistory";
import StrategicDirection from "@/pages/AboutPage/components/StrategicDirection";
import CompanyStructure from "@/pages/AboutPage/components/CompanyStructure";
import BusinessModel from "@/pages/AboutPage/components/BusinessModel";
import MissionVision from "./components/MissionVision";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const About = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  }, [searchParams]);

  return (
    <section className="min-h-screen bg-white px-4 py-20 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/** Who are we section */}
        <Whoarewe />
        {/** History */}
        <Ourhistory />

        {/** Strategic Direction */}
        <StrategicDirection />

        {/** Mission vision */}
        <MissionVision />

        {/** company structure */}
        <CompanyStructure />

        {/**  Business model */}
        <BusinessModel />
      </div>
    </section>
  );
};
