import globalpresence from "../../assets/globalpresence-light.png";

const locations = ["Philippines", "Taiwan", "Hong Kong", "China"];

const GlobalPresencePreview = () => {
  return (
    <section className="relative overflow-hidden bg-brand-primary-50 px-6 py-20 sm:px-8 lg:px-16">
      <div className="relative z-10 mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-primary-500 shadow-sm">
            Global Presence
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-brand-primary-500 sm:text-4xl lg:text-5xl">
            Connecting businesses across local and global markets
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            We support clients and partners across different markets through
            reliable services, strong partnerships, and a growing operational
            network.
          </p>
        </div>

        <div className="relative rounded-[2rem] shadow-2xl">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={globalpresence}
              alt="Global presence map"
              className="h-[360px] w-full object-cover lg:h-[520px]"
            />

            <div className="absolute left-5 top-5 rounded-full border border-brand-accent-500/40 bg-brand-primary-900/70 px-4 py-2 text-sm font-medium text-brand-accent-500 backdrop-blur">
              Operational Reach
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-brand-primary-900/75 p-4 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">Key Markets</h3>
                  <p className="text-sm text-slate-300">
                    Active partner locations
                  </p>
                </div>

                <span className="rounded-full bg-brand-accent-500 px-3 py-1 text-xs font-semibold text-brand-primary-900">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {locations.map((location) => (
                  <div
                    key={location}
                    className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center text-sm text-white"
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresencePreview;