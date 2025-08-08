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
    question: "What cloud services do you offer? ",
    answer: "We provide scalable cloud storage, secure data backup, high-performance computing, and cloud collaboration tools. Our services are designed to optimize resources, improve performance, and enhance business efficiency.",
    value: "item-1",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "Our cloud services include continuous monitoring, real-time threat detection, and DDoS protection to keep your data secure. We ensure compliance with industry standards to protect your business from potential threats.",
    value: "item-2",
  },
  {
    question:
      " Do you offer workshops or demos?  ",
    answer:
      "Yes! We offer interactive workshops and demos to help you understand how our cloud solutions can benefit your business. Reach out via our official website to schedule a session.",
    value: "item-3",
  },
  {
    question: " How do I get discounts on your services?",
    answer: "Contact us through our official site to receive special discounts on cloud services. We believe in providing value to our clients, and our team is ready to discuss tailored pricing options.",
    value: "item-4",
  },
  {
    question:
      "Can you help with cloud migration?",
    answer:
      "Absolutely! We offer seamless cloud migration services, ensuring minimal disruption during the transition to our infrastructure, whether you're moving data, apps, or services.",
    value: "item-5",
  },
  {
    question:
      "What industries do you serve?  ",
    answer:
      "We cater to various industries such as e-commerce, fintech, media, telecommunications, and more. No matter your industry, we offer flexible solutions to fit your unique needs.",
    value: "item-6",
  },
  {
    question:
      "Tell me about your data centers.   ",
    answer:
      "Our data centers are strategically located worldwide to provide high availability and low latency. They are equipped with the latest technologies to ensure the highest level of security and performance.",
    value: "item-7",
  },

  {
    question:
      "What’s the cost of your cloud services?    ",
    answer:
      "We offer flexible, usage-based pricing. This ensures you pay only for the resources you use, keeping your cloud spend optimized and cost-efficient.",
    value: "item-8",
  },
  {
    question:
      "How do you ensure high performance",
    answer:
      "Our data centers are strategically located worldwide to provide high availability and low latency. They are equipped with the latest technologies to ensure the highest level of security and performance.",
    value: "item-9",
  },
  {
    question:
      "Do you offer disaster recovery solutions? ",
    answer:
      "Yes, we provide robust disaster recovery services to keep your business running smoothly. Our backup solutions ensure your data is safe and can be quickly restored in case of any emergency",
    value: "item-10",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
        data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
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
