import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Sponsors } from "./components/Sponsors";
import { ScrollToTop } from "./components/ScrollToTop";
import AnotherPage from "./AnotherPage";
import Missionvisionanotherpage from "./Misionvision-another-page"; // Import the new page
import Historyanotherpage from "./History-another-page"; // Import the new page
import Targetmarketsanotherpage from "./Targetmarkets-another-page"; // Import the new page
import Servicesanotherpage from "./Services-another-page";
import Contact from "./Contact"; // Import the new page

import Aboutanotherpage from "./About-another-page"; // Import the new page
import { Herotwo } from "./components/Herotwo";
import { FAQ } from "./components/FAQ";

import { Statistics } from "./components/Statistics";

import { Workplace } from "./Workplace";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animations on scroll up
      mirror: true, // Animate elements when scrolling up
    });
  }, []);

  return (
    <Router>
      {/* Main layout wrapper */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar is always displayed */}
        <Navbar />

        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            {/* Route for the main page */}
            <Route
              path="/"
              element={
                <>      
                  <Hero />
                  <Statistics />
                  <Herotwo />
                  
                 
                
                  <FAQ /> 
                  <Sponsors />  
                  <ScrollToTop />
                  
                </>
              }
            />

            {/* Route for AnotherPage */}
            <Route path="/another" element={<AnotherPage />} />

            {/* Route for Missionvisionanotherpage */}
            <Route path="/missionvision-another" element={<Missionvisionanotherpage />} />

            <Route path="/history-another" element={<Historyanotherpage />} />

            <Route path="/targetmarkets-another" element={<Targetmarketsanotherpage />} />

            <Route path="/services-another" element={<Servicesanotherpage />} />
            <Route path="/about-another" element={<Aboutanotherpage />} />
          
            <Route path="/contact" element={<Contact />} />
            <Route path="/workplace" element={<Workplace />} />
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

