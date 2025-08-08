import React from "react";
import {About} from "./components/About";

import { Cta } from "./components/Cta";
import {Testimonials} from "./components/Testimonials";
const Aboutanotherpage: React.FC = () => {
  return (
    <>
      {/* Include the Navbar */}
     
      <About />
      <Testimonials />
      {/* Page Content */}
      <Cta  />
    
    </>
  );
};

export default Aboutanotherpage;