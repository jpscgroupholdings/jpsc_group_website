  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }

  
  const FAQList: FAQProps[] = [
    {
      question: "Large Corporations",
      answer: "Established companies with extensive operations that handle user service requests through channels like email, ticketing systems, and phone",
      value: "item-1",
    },
    {
      question: "Intuitive user interface",
      answer:
        "Smaller businesses managing customer requests via email, phone, or simple systems.",
      value: "item-2",
    },
    {
      question:
        "AI-Powered insights",
      answer:
        "New businesses with agile operations, using modern tools for efficient customer support and rapid growth.",
      value: "item-3",
    },
    {
      question: "Gov. & Public Sector.",
      answer: "Government agencies and public institutions providing services to citizens, often managing requests through official channels",
      value: "item-4",
    },
    {
      question:
        "Private Equity",
      answer:
        "Investment firms that acquire and manage companies to increase their value before selling or taking them in public.",
      value: "item-5",
    },
  
    {
      question: "E-commerce Companies",
      answer:
        "Businesses that sell products or services online, managing customer orders, inquiries, and support through digital platforms.",
      value: "item-6",
    },
    {
      question:
        "Telecom Companies",
      answer:
        "Provide mobile,internet and TV services, handling customer support through multiple channels.",
      value: "item-7",
    },
    {
      question: "Financial Services",
      answer: "Update the ticket status to reflect  the resolution or service completion",
      value: "item-8",
    },
    {
      question:
        "Educational Institutions",
      answer:
        "Document the troubleshooting steps,solutions and any new knowledge gained during the process.",
      value: "item-9",
    },
    {
      question: "Real Estate and Property Management Firms",
      answer: "Analyze trends and patterns in service requests and resolutions to identify recurring issues or areas for process improvement",
      value: "item-10",
    },
  ];
  
  export const TargetmarketsExplained = () => {
    return (
      <section
        id="faq"
        className="container py-24 sm:py-32"
          data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Detailed{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Explanation
          </span>
        </h2>
  
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  
        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            rel="noreferrer noopener"
            href="/contact"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
         
    );
 
  };

  export default TargetmarketsExplained;