export const Vision = () => {
  return (
    <section id="vision">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Our <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Vision & Mission</span>
        </h3>

        {/* Flex container for Vision and Mission */}
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Vision Box */}
          <div className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h4 className="text-3xl font-bold text-center mb-4 text-primary">Our Vision</h4>
            <p className="text-lg text-black leading-relaxed mt-5 justify-center">
              To be a leading holding company that drives value through strategic asset management and advanced technology, delivering efficient, transparent,
              and sustainable solutions for our stakeholders.
            </p>
          </div>

          {/* Mission Box */}
          <div className="flex-1 bg-white dark:bg-gray-900 p-6  rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h4 className="text-3xl font-bold text-center mb-4 text-primary">Our Mission</h4>
            <p className="text-lg text-black leading-relaxed mt-5 justify-center">
              To operate as a holding company, utilizing Information and Communication Technology (ICT). And offer professional subleasing and property
              management services, including the negotiation, execution, and administration of sublease agreements. We focus on delivering effective asset
              management solutions supporting business growth and operational efficiency.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
