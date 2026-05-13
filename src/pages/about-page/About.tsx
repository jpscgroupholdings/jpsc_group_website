import Whoarewe from "@/pages/about-page/components/Whoarewe";
// import Ourhistory from "@/pages/about-page/components/Ourhistory";
import StrategicDirection from "@/pages/about-page/components/StrategicDirection";
import CompanyStructure from "@/pages/about-page/components/CompanyStructure";
import BusinessModel from "@/pages/about-page/components/BusinessModel";
import MissionVision from "./components/MissionVision";

export const About = () => {

  return (
    <section className="min-h-screen bg-white px-4 py-20 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/** Who are we section */}
        <Whoarewe />
        {/** History */}
        {/* <Ourhistory /> */}

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
