import { Hero } from "./components/Hero";
import GroupOverview from "./components/GroupOverview";
import { Subsidaries } from "./components/Subsidaries";
import CSRPreview from "./components/CSRPreview";
import GlobalPresencePreview from "./components/GlobalPresencePreview";
import CTAButton from "./components/CTAButton";
import ContactUs from "./components/ContactUs";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <GroupOverview />
      <Subsidaries />
      <CSRPreview />
      <GlobalPresencePreview />
      <CTAButton />
      <ContactUs />
    </div>
  );
};

export default Home;
