import { useRef } from "react";
import companystructure from "../../../assets/jpsc_structure.jpg";

const CompanyStructure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    const glare = glareRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
 
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    // Dynamic shadow that shifts opposite to tilt direction
    const shadowX = (rotateY / 12) * 20;
    const shadowY = (rotateX / 12) * -20;

    el.style.transform = `scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)`;

    // Glare position
    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0,0,0,0.25) 4%, transparent 10%)`;
      glare.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    const glare = glareRef.current;
    if (!el) return;

    el.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
    el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";

    if (glare) glare.style.opacity = "0";
  };

  return (
    <section id="group-structure" className="scroll-mt-32 space-y-10 mb-24">
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
      <div
        className="w-full flex justify-center"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative rounded-xl overflow-hidden cursor-pointer"
          style={{
            transition:
              "transform 0.15s ease-out, box-shadow 0.15s ease-out",
            willChange: "transform",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={companystructure}
            className="w-full max-w-2xl h-auto object-contain block"
            draggable={false}
          />

          {/* Glare overlay */}
          <div
            ref={glareRef}
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              opacity: 0,
              transition: "opacity 0.2s ease",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyStructure;