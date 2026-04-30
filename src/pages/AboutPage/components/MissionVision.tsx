import missionvisionimage from "../../../assets/home-hero.png.webp"

const MissionVision = () => {
  return (
    <section id="missionvision" className="scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col md:flex-row lg:flex-col">
          {/** Mission */}
          <div className="flex-1 flex flex-col justify-center py-10 border-b border-stone-200">
            <p className="text-xs tracking-widest text-brand-color-500 uppercase mb-4">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mission
            </h2>
            <p className="text-base leading-relaxed text-stone-500 max-w-sm">
              To build and grow a diversified portfolio of businesses by
              leveraging innovation, strategic partnerships, and operational
              excellence, delivering sustainable value across technology,
              services, and enterprise solutions.
            </p>
          </div>

          {/** Vision */}
          <div className="flex-1 flex flex-col justify-center py-20">
            <p className="text-xs tracking-widest text-brand-color-500 uppercase mb-4">
              Our Future
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Vision
            </h2>
            <p className="text-base leading-relaxed text-stone-500 max-w-sm">
              To become a leading Philippine investment group recognized for
              building scalable, resilient, and high-impact businesses, with a
              clear path toward long-term growth and public market readiness.
            </p>
          </div>
        </div>

        <div className="relative w-full h-75 md:h-100 lg:h-auto">
          <img
            src={missionvisionimage}
            alt="Team collaboration"
            className="object-cover lg:sticky lg:top-0 w-full h-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
