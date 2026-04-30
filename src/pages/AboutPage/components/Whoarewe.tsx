import peopleWorking from "../../../assets/sample office/peopleworking.jpg";

/* Dot grid that fades toward the top-right — feels airy, not boxy */
function DotPattern() {
  const cols = 10;
  const rows = 8;
  const spacingX = 13;
  const spacingY = 13;
  const width = (cols - 1) * spacingX + 10;
  const height = (rows - 1) * spacingY + 10;

  const dots: { cx: number; cy: number; opacity: number }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 5 + c * spacingX;
      const y = 5 + r * spacingY;
      // Fade: strong bottom-left, invisible top-right
      const normX = c / (cols - 1); // 0=left, 1=right
      const normY = r / (rows - 1); // 0=top, 1=bottom
      const opacity = (normY * 0.6 + (1 - normX) * 0.4) * 0.55;
      if (opacity < 0.04) continue;
      dots.push({ cx: x, cy: y, opacity: parseFloat(opacity.toFixed(2)) });
    }
  }

  return (
    <svg
      className="absolute bottom-6 left-4 z-10"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={1.8}
          fill="#0F6E56"
          opacity={d.opacity}
        />
      ))}
    </svg>
  );
}

const Whoarewe = () => {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      {/* --- Left: Text --- */}
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-primary-600">
            Company Overview
          </p>
          <h1 className="text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
            Who We Are
          </h1>
          <div className="h-[3px] w-12 rounded-full bg-brand-primary-500" />
        </div>
        <p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">
          JPSC Group Holding Inc. is a Philippine-based conglomerate established
          in 2022 with a mandate to build, acquire, and grow businesses across
          high-potential sectors of the local economy.
        </p>
        <p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">
          Through a portfolio of strategically aligned subsidiaries, the Group
          delivers integrated value across services, hospitality, and enterprise
          solutions.
        </p>
      </div>
      {/* --- Right: Image composition --- */}
      <div className="relative mx-auto h-[380px] w-[340px]">
        {/* Dark green backing circle */}
        <div className="absolute bottom-8 left-0 h-52 w-52 rounded-full bg-brand-primary-900 -z-10" />
        {/* Dot arc — fades naturally using SVG, not a clipped box */}
        <DotPattern />
        {/* Main image */}
        <div
          className="absolute right-0 top-0 z-20 h-[310px] w-[285px] overflow-hidden"
          style={{ borderRadius: "42% 78% 75% 89% / 55% 75% 65% 86%" }}
        >
          <img
            src={peopleWorking}
            alt="JPSC team at work"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* Floating accent bubbles */}
        <div className="absolute top-4 -right-2 z-30 h-7 w-7 rounded-full bg-brand-primary-400 opacity-80" />
        <div className="absolute bottom-16 right-1 z-30 h-3.5 w-3.5 rounded-full bg-brand-primary-200" />
        <div className="absolute bottom-12 right-6 z-30 h-2 w-2 rounded-full bg-brand-primary-100" />
      </div>
    </div>
  );
};

export default Whoarewe;
