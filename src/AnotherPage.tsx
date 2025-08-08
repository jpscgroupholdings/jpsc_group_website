import React from "react";
{/*import Navbar from "./components/Navbar";*/} // Import the same Navbar component 
import Services from "./components/Services"; // Import the Services component
const AnotherPage: React.FC = () => {
  return (
    <>
      {/* Include the Navbar */}
     
    <Services />
      {/* Page Content */}
      <div>
        <h1>Welcome to Another Page</h1>
        <p>This is the content of the Another Page.</p>
      </div>
    </>
  );
};

export default AnotherPage;