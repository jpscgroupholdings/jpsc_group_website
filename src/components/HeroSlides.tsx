import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import tech from "/src/assets/itservices.jpg";
import strat from "/src/assets/ms.avif";
import taskauto from "/src/assets/taskauto.webp";
import op from "/src/assets/operational.jpg";
import legal from "/src/assets/legal.jpeg";

const heroSlides = [
  {
    title: "Strategic Management Services",
    description:
      "Providing corporate governance, financial oversight, and strategic direction to ensure long-term business success.",
    image: strat,
    buttonText: "Strategic Management Services",
  },
  {
    title: "Technology and Brand Management Services",
    description:
      "Providing IT infrastructure support, technology consulting, data management, corporate branding, and market research to drive innovation and brand visibility.",
    image: tech,
    buttonText: "Technology and Brand Management Services",
  },
  {
    title: "Task Automation Testing",
    description:
      "Designing and validating automated workflows to ensure tasks run accurately, efficiently, and consistently across systems.",
    image: taskauto,
    buttonText: "Task Automation",
  },
  {
    title: "Operational Support Services",
    description:
      "Offering centralized procurement, supply chain management, human resources, and shared services for operational efficiency.",
    image: op,
    buttonText: "Operational Support Services",
  },
  {
    title: "Legal, Compliance, and Property Management",
    description:
      "Overseeing legal requirements, maintaining regulatory compliance, and managing properties to ensure smooth operations and proper governance.",
    image: legal,
    buttonText: "Legal, Compliance, and Property Management",
  },
];

export const HeroSlides = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const handleNext = () => {
    setCurrentTopicIndex((prevIndex) =>
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentTopicIndex((prevIndex) =>
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1,
    );
  };

  const handleImageClick = () => {
    setIsPreviewOpen(true); // Open the preview modal
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false); // Close the preview modal
  };

  const handleCloseLearnMore = () => {
    setIsLearnMoreOpen(false); // Close the Learn More modal
  };

  const currentTopic = heroSlides[currentTopicIndex];

  // Auto-switch to the next topic every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [currentTopicIndex]);

  return (
    <section className="relative w-full h-[70vh] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105`}
        style={{
          backgroundImage: `url(${currentTopic.image})`,
        }}
      >
        {/* Clickable Layer */}
        <div
          className="absolute inset-0 z-20 cursor-zoom-in"
          onClick={handleImageClick}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-30 container mx-auto h-full flex flex-col justify-center items-start gap-5 px-6">
        <h1 className="text-3xl md:text-4xl font-bold">{currentTopic.title}</h1>
        <p className="text-base md:text-lg text-gray-300"></p>

        <a
          href="/services"
          rel="noreferrer noopener"
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Learn More →
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full transition z-30"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full transition z-30"
      >
        <ChevronRight size={22} />
      </button>

      {/* Topic Selector */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md py-3 z-30">
        <div className="container mx-auto px-4">
          <div className="md:overflow-x-hidden overflow-x-auto flex gap-3 justify-start md:justify-center">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setCurrentTopicIndex(index)}
                className={`
                        whitespace-nowrap
                        px-4 py-2
                        text-sm md:text-lg
                        font-medium
                        transition
                        border-b-2
            ${
              currentTopicIndex === index
                ? "border-primary text-white"
                : "border-transparent text-gray-300 hover:text-white"
            }
          `}
              >
                {slide.buttonText}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex justify-center items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentTopic.image})`,
            }}
          ></div>
          <button
            onClick={handleClosePreview}
            className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-md z-60"
          >
            Close
          </button>
        </div>
      )}

      {/* Learn More Modal */}
      {isLearnMoreOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">{currentTopic.title}</h2>
            <p className="text-gray-200 max-w-lg">{currentTopic.description}</p>
            <Button
              className="bg-black text-white px-4 py-2 rounded-md"
              onClick={handleCloseLearnMore}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
