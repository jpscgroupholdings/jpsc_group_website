const SectionHero = ({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-brand-primary-500 px-10 py-20 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-brand-primary-300 opacity-20 pointer-events-none" />
      <div className="absolute right-10 top-10 w-52 h-52 rounded-full border border-brand-primary-300 opacity-10 pointer-events-none" />

      <p
        className="text-brand-accent-500 text-xs font-medium tracking-widest uppercase mb-4"
        style={{ letterSpacing: "0.18em" }}
      >
        {label}
      </p>
      <div className="w-10 h-0.5 bg-brand-accent-500 mb-6" />
      <h1
        className="font-display text-white text-5xl font-semibold leading-tight max-w-lg mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h1>
      <p className="text-brand-primary-200 text-sm font-light max-w-md leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHero;
