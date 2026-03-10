export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    { quantity: "20+", description: "Services" },
    { quantity: "1.8K+", description: "Subscribers" },
    { quantity: "100+", description: "Inquiries" },
    { quantity: "5", description: "Products" },
  ];

  return (
    <section
      id="statistics"
      data-aos="fade-up"
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ quantity, description }) => (
            <div
              key={description}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                {quantity}
              </h2>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};