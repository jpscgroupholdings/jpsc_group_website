import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon } from "../components/Icons";
import target from "../assets/target.png";
import vis from "../assets/vision.png";
import misvislogo from "../assets/vision-and-mission.png";
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

export const Mission = () => {
  return (
    <section
      id="missionandvision"
      className="container text-center py-24 sm:py-32"
      data-aos="fade-up"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center flex items-center justify-center gap-4">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Mission and Vision{" "}
        </span>
        <img
          src={misvislogo}
          alt="analytics"
          className="w-[55px] h-[55px]" // Adjusted size for alignment
        />
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground ">
        
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map(({ image, title, description }: FeatureProps) => (
          <Card
         
            key={title}
            className="bg-muted/50  transform hover:scale-105 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center ">
                
                {title}
              </CardTitle>
            </CardHeader>
            <img
                src={image} // Use the `image` property from the `features` array
                alt={`${title} illustration`}
                className="mt-1 w-1/6 h-auto mx-auto rounded-md" // Adjusted width to 3/4 and centered
              />
     
           
            <CardContent>
              <p className="text-lg md:text-xl text-muted-foreground mt-5 justify-center">{description}</p> {/* Increased font size */}
            </CardContent>
          </Card>
        ))}
      </div>


      
    </section>
  );
};
