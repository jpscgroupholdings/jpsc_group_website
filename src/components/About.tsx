import logo from "../assets/logo.png"; // Updated to import logo.jpg

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-29"
        data-aos="fade-up"
    >
      <div className="bg-muted/20 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={logo} // Updated to use logo.jpg
            alt="Company Logo"
            className="w-[200px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                The Company
              </h2>
              <p
                className="text-lg  leading-relaxed mt-5"
              >
                JPSC Group Holdings Inc. is a dynamic holding company focused on strategic asset management and leveraging technology for operational efficiency.
                We specialize in subleasing and managing office spaces and commercial properties and provide tailored solutions for businesses.
                Committed to excellence, innovation, and transparency, we deliver lasting value to stakeholders with professionalism and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
