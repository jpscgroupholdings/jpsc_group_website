// Import the images
import logo from "../assets/consi/jppro.png";
import diglogo from "../assets/diglogo.png";
import logotwo from "../assets/consi/jpson.jpg";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: (
      <img
        src={logo} // Use the imported logo variable
        alt="JPSC Logo"
        className="w-48 h-48 md:w-64 md:h-64" // Increased size
      />
    ),
    name: "JP & SON GROUP CONSULTING SERVICES INC.",
  },
  {
    icon: (
      <img
        src={diglogo} // Use the imported diglogo variable
        alt="Digital One Solutions Logo"
        className="w-48 h-48 md:w-64 md:h-64" // Increased size
      />
    ),
    name: "DIGITAL ONE SOLUTIONS PHILIPPINES INC.",
  },
  {
    icon: (
      <img
        src={logotwo} // Use the imported logotwo variable
        alt="JP Pro Solutions Logo"
        className="w-40 h-40 md:w-64 md:h-69" // Increased size
      />
    ),
    name: "JP PRO SOLUTIONS CORP.",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="fullscreen pt-24 sm:py-32 ">
      <h2 className="text-center text-md lg:text-6xl font-bold mb-8 text-primary">
        Our Subsidiaries
      </h2>

      {/* Flex container for logos in a straight line */}
      <div className="flex justify-center items-center gap-16 ">
        {sponsors.map(({ icon }: SponsorProps, index) => (
          <div key={index} className="flex items-center ">
            <span className="block transition-transform transform hover:scale-105 hover:shadow-lg">{icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
