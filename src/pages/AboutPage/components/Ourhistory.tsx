const Ourhistory = () => {
  interface FeatureProps {
    title: string;
    description: string;
  }

  const features: FeatureProps[] = [
    {
      title: "2023 — Core Subsidiaries Launch",
      description:
        "Founded on September 16, the company established its core subsidiaries, focusing on building a strong technological foundation with advanced ICT systems for secure and efficient operations.",
    },
    {
      title: "2024 — Strategic Portfolio Expansion",
      description:
        "Expanded operational capabilities, strengthened asset management systems, and formed strategic partnerships to deliver improved solutions.",
    },
    {
      title: "2025 — Scale and Consolidation",
      description:
        "Entered the property management sector, offering commercial and office spaces with flexible leasing and comprehensive management services.",
    },
  ];
  return (
    <div id="company-history" className="mt-20 space-y-20 scroll-mt-32">
      <div className="space-y-3">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-primary-600">
          Corporate History
        </p>
        <h1 className="text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
          Our Journey
        </h1>
        <div className="h-[3px] w-12 rounded-full bg-brand-primary-500" />
      </div>

      <div className="space-y-8 max-w-3xl">
        {[...features].reverse().map((item, index) => (
          <div key={item.title} className="flex gap-x-3">
            {/** line and circle */}
            <div className="relative after:absolute after:top-7 after:bottom-0 after:start-3.5 after:bg-gray-200 after:w-px after:-translate-x-[0.5px] last:after:hidden">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div
                  className={`size-2 rounded-full ${index === 0 ? "bg-brand-primary-500" : "bg-gray-400"}`}
                ></div>
              </div>
            </div>
            {/** Left part */}
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourhistory;
