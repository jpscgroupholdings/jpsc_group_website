
import profile from "../assets/profile.pdf";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
        data-aos="fade-up"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              JPSC Group Holdings{" "}
            </span>
            Company Profile
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
           Learn more about our company here.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
        
            href={profile}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:mr-4 md:w-auto inline-block text-center bg-primary/60 hover:bg-primary/80 hover: text-white py-2 px-4 rounded"
          >
            View Company Profile
          </a>
        
        </div>
      </div>
    </section>
  );
};
