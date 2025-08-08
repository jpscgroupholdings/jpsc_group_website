
import managementservice from "../assets/consi/management-consulting.gif";
import operational from "../assets/consi/operational-services.gif";
import technology from "../assets/consi/technological.gif";
import legal from "../assets/consi/legal.gif";
import auto  from "../assets/consi/marketing-automation.gif";
interface ServiceProps {
  title: string;
  description: string;
  gif?: string;
  icon?: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    gif: managementservice,
    title: "Strategic Management Services",
    description:
    
      "Providing corporate governance, financial oversight, and strategic direction to ensure long-term business success.",
  },
  {
    gif: operational,
    title: "Operational Support Services",
    description:
      "Offering centralized procurement, supply chain management, human resources, and shared services for operational efficiency.",
  },
  {
    gif: technology,
    title: "Technology and Brand Management Services",
    description:
      "Providing IT infrastructure support, technology consulting, data management, corporate branding, and market research to drive innovation and brand visibility.",
  },
  {
    gif: legal,
    title: "Legal, Compliance, and Property Management",
    description:
      "Managing investments, optimizing portfolios, and ensuring effective profit distribution for maximum returns.",
  },
  {
    gif: auto,
    title: "Task Automation",
    description:
      "Ensuring regulatory compliance, managing legal affairs, protecting intellectual property, and overseeing real estate investments and facilities.",
  },
];

export const Services = () => {
  return (
    <section id="services" data-aos="fade-up">
      <section className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Our Services
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4">
            Explore the wide range of services we offer to help your business thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map(({ gif, title, description }: ServiceProps) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {/* Icon Placeholder */}
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex justify-center items-center">
                <img src={gif} alt={title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;