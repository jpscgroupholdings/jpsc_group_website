import company_structure from "../assets/jpsc_structure.jpg"
import { About } from "./About";

export const Sponsors = () => {
  return (
      <div className="mt-16">
        <h2 className="text-center text-md lg:text-6xl font-bold mb-8 text-primary">
        Our Subsidiaries
      </h2>

        <div id="sponsors" className="flex justify-center">
          <img
            src={company_structure}
            alt="Company Structure"
            className="rounded-lg border shadow-md max-w-full md:max-w-4xl"
          />
        </div>

        <About />
      </div>
  );
};
