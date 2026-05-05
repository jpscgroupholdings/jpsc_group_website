export function PhotoBlock({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative max-h-40 overflow-hidden bg-brand-primary-900 ${className}`}
    >
      <img
        src={src}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/25" />

      <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.25em] text-white/70">
        {label}
      </span>
    </div>
  );
}