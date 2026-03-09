import logo from "../assets/logo.png";

export const About = () => {
  return (
    <section id="about" className="container sm:py-32" data-aos="fade-up">
      <div className="p-8 md:p-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Company Logo"
              className="w-[200px] md:w-[240px] object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                About
              </span>{" "}
              The Company
            </h2>

            <p className="text-lg leading-relaxed mt-6 text-muted-foreground">
              JPSC Group Holdings Inc. is a dynamic holding company focused on
              strategic asset management and leveraging technology for
              operational efficiency. We specialize in subleasing and managing
              office spaces and commercial properties while providing tailored
              solutions for businesses.
            </p>

            <p className="text-lg leading-relaxed mt-4 text-muted-foreground">
              Committed to excellence, innovation, and transparency, we deliver
              lasting value to stakeholders with professionalism and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
