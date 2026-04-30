import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/homepage/Hero";
import { Navbar } from "./components/Navbar";
import { Subsidaries } from "./sections/homepage/Subsidaries";
import { ScrollToTop } from "./components/ScrollToTop"; // Import the new page

import GroupOverview from "./sections/homepage/GroupOverview";
import { FAQ } from "./components/FAQ";

import { Workplace } from "./pages/Workplace";
import { ContactPage } from "./pages/ContactPage";
import { HistoryPage } from "./pages/HistoryPage";
import ServicesPage from "./pages/ServicesPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import CSRPreview from "./sections/homepage/CSRPreview";
import GlobalPresencePreview from "./sections/homepage/GlobalPresencePreview";
import CTAButton from "./sections/homepage/CTAButton";
import ContactUsPage from "./sections/homepage/ContactUs";
import { About } from "./pages/AboutPage/About";
import JPSCSubsidiaries from "./pages/Subsidaries";
import ScrollToHash from "./components/ScrollToHash";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animations on scroll up
      mirror: true, // Animate elements when scrolling up
    });
  }, []);

  return (
    <Router basename="/"> 
      <ScrollToHash />
      {/* Main layout wrapper */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar is always displayed */}
        <Navbar />

        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            {/* Route for the main page */}
            <Route
              path="/"
              element={
                <div className="bg-white">
                  <Hero />
                  <GroupOverview />
                  <Subsidaries />
                  <CSRPreview />
                  <GlobalPresencePreview />
                  <CTAButton />
                  <ContactUsPage />
                  <ScrollToTop />
                </div>
              }
            />
            <Route path="/subsidaries" element={<JPSCSubsidiaries />} />
            <Route path="/history" element={<HistoryPage />} />

            <Route path="/target-markets" element={<FeaturesPage />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/workplace" element={<Workplace />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </div>

        {/* Footer is always displayed */}
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
