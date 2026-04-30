const BusinessModel = () => {
  return (
    <section className="mt-24 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-primary-600">
          Business Model
        </p>
        <h2 className="text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
          Revenue Ecosystem and Operating Framework
        </h2>
        <div className="h-[3px] w-12 rounded-full bg-brand-primary-500" />
        <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          The Group is structured to generate sustainable value through
          diversified revenue streams, shared operational capabilities, and
          strategic alignment across its subsidiaries.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-primary-600">
            Revenue Ecosystem
          </p>
          <h3 className="mb-3 text-xl font-bold text-gray-950">
            Diversified Income Streams
          </h3>
          <p className="text-sm leading-7 text-gray-600">
            The Group builds revenue through technology solutions, consulting
            services, corporate operations, hospitality ventures, and
            property-based assets, reducing reliance on a single market segment.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-primary-600">
            Cross-Subsidiary Synergy
          </p>
          <h3 className="mb-3 text-xl font-bold text-gray-950">
            Shared Capabilities
          </h3>
          <p className="text-sm leading-7 text-gray-600">
            Subsidiaries benefit from shared systems, centralized strategy,
            brand alignment, and operational support, allowing each business
            unit to grow faster while contributing to the wider Group ecosystem.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-primary-600">
            Operating Framework
          </p>
          <h3 className="mb-3 text-xl font-bold text-gray-950">
            Governed for Scale
          </h3>
          <p className="text-sm leading-7 text-gray-600">
            The Group applies structured governance, performance monitoring,
            technology-enabled operations, and disciplined capital allocation to
            support scalable growth and long-term enterprise value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
