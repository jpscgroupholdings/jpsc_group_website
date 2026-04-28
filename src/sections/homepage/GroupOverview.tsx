const groupDivisions = [
  {
    title: "Technology Solutions",
    description:
      "Building digital systems, web platforms, and technology-driven tools that support business operations and growth.",
  },
  {
    title: "Consulting Services",
    description:
      "Providing strategic guidance, operational support, and professional advisory services for businesses and organizations.",
  },
  {
    title: "Corporate Services",
    description:
      "Managing core business functions, partnerships, administration, and company-wide operational direction.",
  },
  {
    title: "Restaurant & Hospitality",
    description:
      "Delivering food, service, and customer-focused dining experiences through the company’s restaurant ventures.",
  },
];

export default function GroupOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Group Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A diversified company group built across multiple industries
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Our company brings together specialized business units in
            technology, consulting, corporate services, and restaurant
            operations — creating a strong foundation for innovation, service,
            and sustainable growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groupDivisions.map((division, index) => (
            <div
              key={division.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {division.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {division.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}