import harrison from "../../../assets/harrison.jpg";
import { FadeUp } from "./FadeUp";

// ── HERO ─────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-brand-primary-900">
      {/* Left */}
      <div className="relative flex flex-col justify-end w-full lg:w-[45%] px-6 py-16 sm:px-10 md:px-14 lg:pb-20">
        <div className="absolute top-24">
          <a href="https://food.harrisoninasalbbq.com.ph/" target="_blank" className="text-white animate-pulse bg-[#ef4501] py-2 px-4 shadow-sm">
            Visit Now!
          </a>
        </div>

        <FadeUp>
          <p className="mb-4 text-[10px] sm:text-xs tracking-[0.24rem] sm:tracking-[0.3rem] uppercase text-brand-accent-500">
            01 · Brand Story
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="font-serif font-black leading-none text-white text-[clamp(42px,13vw,80px)] lg:text-[clamp(52px,5.5vw,80px)]">
            HARRISON
            <br />
            <span className="text-[#ef4501]">
              HOUSE
              <br />
              OF INASAL
              <br />
              &amp; BBQ
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="my-6 sm:my-8 h-px bg-brand-accent-500" />

          <p className="max-w-md text-sm sm:text-base lg:text-sm leading-loose text-brand-accent-500">
            Born from the smoke and soul of Filipino tradition. A gathering
            place where the grill never goes cold and every meal feels like
            coming home.
          </p>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="flex gap-2 mt-8 sm:mt-10">
            <div className="w-2 h-2 rounded-full bg-brand-accent-600" />
            <div className="w-2 h-2 rounded-full bg-brand-accent-200" />
            <div className="w-2 h-2 rounded-full bg-brand-accent-100" />
          </div>
        </FadeUp>
      </div>

      {/* Right */}
      <div className="relative flex-1 min-h-[420px] sm:min-h-[520px] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-brand-primary-900">
          <img
            src={harrison}
            alt="Harrison House of Inasal and BBQ"
            className="w-auto object-cover"
          />

          {/* Small floating card */}
          <div className="absolute top-6 right-4 sm:top-10 sm:right-8 lg:top-20 lg:right-10 w-44 sm:w-52 px-4 sm:px-6 py-3 sm:py-4 border border-brand-accent-500 bg-brand-primary-900">
            <p className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.23em] uppercase text-brand-accent-500">
              Char-Grilled · Wood-Fired
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-200">
              Inasal & BBQ
            </p>
          </div>

          {/* Bottom pill */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 bg-[#ef4501] border border-white/30 py-3 px-5 sm:px-9 whitespace-nowrap">
            <p className="text-[8px] sm:text-[9px] tracking-[0.24em] sm:tracking-[0.3em] uppercase text-white">
              Est. Harrison Group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
