import Whoarewe from "@/pages/AboutPage/components/Whoarewe";
import Ourhistory from "@/pages/AboutPage/components/Ourhistory";
import StrategicDirection from "@/pages/AboutPage/components/StrategicDirection";
import CompanyStructure from "@/pages/AboutPage/components/CompanyStructure";
import BusinessModel from "@/pages/AboutPage/components/BusinessModel";

export const About = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-20 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/** Who are we section */}
        <Whoarewe />
        {/** History */}
        <Ourhistory />

        {/** Strategic Direction */}
        <StrategicDirection />
        {/** company structure */}
        <CompanyStructure />

        {/**  Business model */}
        <BusinessModel />
      </div>
    </section>
  );
};
