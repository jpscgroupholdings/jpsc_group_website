import React from "react";
import {About} from "./components/About";

import {Testimonials} from "./components/Testimonials";
const Aboutanotherpage: React.FC = () => {
  return (
    <>
      {/* Include the Navbar */}
     
      <About />
      <Testimonials />    
    </>
  );
};

export default Aboutanotherpage;