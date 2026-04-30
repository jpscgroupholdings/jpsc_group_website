import companystructure from "../../../assets/jpsc_structure.jpg"

const CompanyStructure = () => {
  return (
    <section className="mt-24 space-y-10">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-primary-600">
          Group Structure
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-950">
          Organizational Structure of the Group
        </h2>
        <div className="h-[3px] w-12 rounded-full bg-brand-primary-500" />
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          The Group operates through a structured network of subsidiaries across
          key sectors, enabling focused operations while maintaining centralized
          strategic direction and governance.
        </p>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src={companystructure}
          alt="JPSC Group Organizational Structure"
          className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-sm"
        />
      </div>
    </section>
  );
};

export default CompanyStructure;
