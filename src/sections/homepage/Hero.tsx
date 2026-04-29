import { Link } from "react-router-dom";
import vid from "../../assets/landscape.mp4"

export const Hero = () => {
  return (
    <section className="relative w-full h-[89vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={vid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 py-10">
        {/* Main headline — bottom-left aligned like Crow Holdings */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl border-l border-brand-primary-50/60 pl-6 space-y-4">
            <h1
              className="text-brand-accent-500 font-serif leading-tight text-nowrap"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
            JPSC Group Holdings Inc.
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed">
              We partner with organizations to design and deliver
              technology-driven strategies that solve complex challenges,
              streamline operations, and unlock sustainable growth — turning
              vision into measurable outcomes.
            </p>
          </div>
        </div>

        {/* CTA Links — bottom row like Crow Holdings arrows */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <Link
            to="/services"
            className="group flex items-center gap-3 text-white text-sm tracking-widest uppercase"
          >
            <span className="border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-300">
              Our Services
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent-500 group-hover:border-white group-hover:bg-brand-accent-600 transition-all duration-300 text-xs">
              →
            </span>
          </Link>

          <Link
            to="/contact"
            className="group flex items-center gap-3 text-white text-sm tracking-widest uppercase"
          >
            <span className="border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-300">
              Contact Us
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent-500 group-hover:border-white group-hover:bg-brand-accent-600 transition-all duration-300 text-xs">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
