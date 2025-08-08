import image1 from "../assets/one.jpg";
import image2 from "../assets/two.jpg";
import image3 from "../assets/three.jpg";
import image4 from "../assets/four.jpg";
import image5 from "../assets/five.jpg";
import image6 from "../assets/six.jpg";
import image7 from "../assets/seven.jpg";
import image8 from "../assets/eight.jpg";
import image9 from "../assets/nine.jpg";
import image10 from "../assets/ten.jpg";
import analytics from "../assets/analytics.png"
import { useRef, useState } from "react";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  
}

const features: FeatureProps[] = [
  {
    title: "Large Corporations",
    description:
      "Established companies with extensive operations that handle user service requests through channels like email, ticketing systems, and phone",
    image: image6,
  },
  {
    title: "Intuitive user interface",
    description:
      "Smaller businesses managing customer requests via email, phone, or simple systems.",
    image: image7,
  },
  {
    title: "AI-Powered insights",
    description:
      "New businesses with agile operations, using modern tools for efficient customer support and rapid growth.",
    image: image8,
  },

  {
    title: "Gov. & Public Sector.",
    description:
      "Government agencies and public institutions providing services to citizens, often managing requests through official channels",
    image: image9,
  },

  {
    title: "Private Equity",
    description:
      "Investment firms that acquire and manage companies to increase their value before selling or taking them in public.",
    image: image10,
  },

  {
    title: "E-commerce Companies",
    description:
      "Businesses that sell products or services online, managing customer orders, inquiries, and support through digital platforms.",
    image: image1,
  },

  {
    title: "Telecom Companies",
    description:
      "Provide mobile,internet and TV services, handling customer support through multiple channels.",
    image: image2,
  },

  {
    title: "Financial Services",
    description:
      "Update the ticket status to reflect  the resolution or service completion",
    image: image3,
  },

  {
    title: "Educational Institutions",
    description:
      "Document the troubleshooting steps,solutions and any new knowledge gained during the process.",
    image: image4,
  },

  {
    title: "Real Estate and Property Management Firms",
    description:
      "Analyze trends and patterns in service requests and resolutions to identify recurring issues or areas for process improvement",
    image: image5,
  },
];

export const Features = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureProps | null>(null);



  const handleBoxClick = (feature: FeatureProps) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section
      id="target"
      className="container py-24 sm:py-32 space-y-8"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl lg:text-4xl font-bold md:text-center flex items-center justify-center gap-4"
        data-aos="fade-right"
      >
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Target Markets
        </span>
        <img
          src={analytics}
          alt="analytics"
          className="w-[55px] h-[55px]" // Adjusted size for alignment
        />
      </h2>

      {/* Horizontal Scrollable Slideshow */}
      <div className="relative" data-aos="fade-left">

        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => handleBoxClick(feature)}
            >
              {/* Image Section */}
              <div className="w-full h-[200px] transition-transform transform hover:scale-105 hover:shadow-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Modal */}
      {isModalOpen && selectedFeature && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">{selectedFeature.title}</h2>
            <p className="text-sm text-gray-700 mb-4">
              {selectedFeature.description}
            </p>
            <button
              className="bg-black text-white px-4 py-2 rounded-md"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
       
     
      )}
    </section>
  );
     
};
