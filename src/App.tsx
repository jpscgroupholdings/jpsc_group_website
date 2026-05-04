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
import { Navbar } from "./components/Navbar";

import { ScrollToTop } from "./components/ScrollToTop"; // Import the new page

import { FAQ } from "./components/FAQ";

import { Workplace } from "./pages/Workplace";
import { ContactPage } from "./pages/ContactPage";
import { About } from "./pages/about-page/About";
import JPSCSubsidiaries from "./pages/Subsidaries";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/home-page/Home";
import BusinessPortfolio from "./pages/BusinessPortfolio";

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
        <ScrollToTop />

        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            {/* Route for the main page */}
            <Route path="/" element={<Home />} />
            <Route path="/subsidaries" element={<JPSCSubsidiaries />} />
            <Route path="/about" element={<About />} />
            <Route path="/business-portfolio" element={<BusinessPortfolio />} />

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
