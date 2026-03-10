import { MedalIcon, MapIcon } from "../components/Icons";
import target from "../assets/target.png";
import vis from "../assets/vision.png";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Mission",
    description:
      "   To be a leading holding company that drives value through strategic asset management and advanced technology, delivering efficient, transparent, and sustainable solutions for our stakeholders.",
    image: target,
  },
  {
    icon: <MapIcon />,
    title: "Vision",
    description:
      "To operate as a holding company, utilizing Information and Communication Technology (ICT). And offer professional subleasing and property management services, including the negotiation, execution, and administration of sublease agreements. We focus on delivering effective asset management solutions supporting business growth and operational efficiency.",
    image: vis,
  },
];

export const MissionVisionPage = () => {
  return (
    <section
      id="missionandvision"
      className="relative container text-center py-12"
      data-aos="fade-up"
    >
      <h2 className=" text-4xl lg:text-4xl font-bold md:text-center flex items-center justify-center gap-4 py-8">
        Our <span className="text-primary uppercase">Mission </span>
        <span>and</span>
        <span className="text-primary uppercase">Vision </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map(({ image, title, description }: FeatureProps) => (
          <div
            key={title}
            className={`bg-muted/50  transform ${title === "Mission" ? " hover:rotate-1" : "hover:-rotate-1"}  hover:shadow-lg`}
          >
            <h1 className="font-bold py-4 text-xl">{title}</h1>
            <img
              src={image} // Use the `image` property from the `features` array
              alt={`${title} illustration`}
              className="mt-1 w-1/6 h-auto mx-auto rounded-md" // Adjusted width to 3/4 and centered
            />
            <div className="py-8 px-16">
              <p className="text-md md:text-lg text-justify py-8">
                {description}
              </p>{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
