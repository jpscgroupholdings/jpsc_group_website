import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { InputField } from "@/components/ui/InputField";
import { TextareaField } from "@/components/ui/TextAreaField";

const contactDetails = [
  {
    title: "Chat with us",
    description: "Speak with our team for inquiries and assistance.",
    links: [
      {
        label: "Shoot us an email",
        href: "mailto:hello@company.com",
        icon: Mail,
      },
      { label: "Message us on Viber", href: "#", icon: MessageCircle },
    ],
  },
  {
    title: "Call us",
    description: "Call our team Monday to Friday, 10:00 AM to 5:00 PM.",
    links: [
      { label: "+63 912 3456 789", href: "tel:+639123456789", icon: Phone },
    ],
  },
  {
    title: "Visit us",
    description: "Meet us in person at our office.",
    links: [{ label: "Makati City, Philippines", href: "#", icon: MapPin }],
  },
];

const ContactUs = () => {
  return (
    <section id="contact-section" className="bg-white px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-brand-primary-50 px-4 py-2 text-sm font-medium text-brand-primary-500">
            Contact Us
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-brand-primary-900 md:text-5xl">
            Let’s talk about how we can help
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Have questions about our services, transactions, or partnerships?
            Send us a message and our team will get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="bg-white p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <InputField
                label="Name"
                required
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
              />

              <InputField
                label="Email"
                required
                type="email"
                name="email"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mt-6">
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                id="phone"
                placeholder="+63 912 345 6789"
              />
            </div>

            <div className="mt-6">
              <TextareaField
                label="Message"
                required
                name="message"
                id="message"
                rows={5}
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-brand-primary-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-brand-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send Message
            </button>
          </form>

          <div className="p-6 text-brand-primary-500 md:p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-3 leading-7 text-brand-primary-500/75">
                Choose the most convenient way to reach our team.
              </p>
            </div>

            <div className="space-y-5">
              {contactDetails.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur"
                  >
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {item.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <div className="flex items-center gap-2 px-4">
                            <Icon size={16}/>
                            <a
                              key={link.label}
                              href={link.href}
                              className="block underline text-sm font-semibold text-brand-primary-500/90 transition hover:text-brand-primary-500/80"
                            >
                              {link.label}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-primary-500/30 bg-brand-primary-500/10 p-5">
              <p className="text-sm font-medium text-brand-primary-500">
                Ready to streamline your transactions and expand your reach?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
