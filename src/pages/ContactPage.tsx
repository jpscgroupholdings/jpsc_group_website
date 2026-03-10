import emailjs from "emailjs-com";
import contactpic from "../assets/contact-us.png";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactPage = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cmcz0dj",
        "template_wozlk4l",
        e.currentTarget,
        "ARJM8CFqSKUs9l1KR",
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  const contacts = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "02-5310-5608",
      href: "tel:0253105608",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "info@digitaloneph.com",
      href: "mailto:info@digitaloneph.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Address",
      value: "Kalayaan Ave, Makati, 1210 Metro Manila",
      href: "https://www.google.com/maps?q=14.566264730473002,121.02815318494143",
    },
  ];

  return (
    <section
      id="newsletter"
      data-aos="fade-up"
      className="bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Get in <span className="text-primary">Touch</span> With Us
            <img
              src={contactpic}
              alt="contact"
              className="inline-block w-10 h-10 ml-3 align-middle"
            />
          </h2>

          <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
            Have a question or ready to start a project? We'd love to hear from
            you.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/80 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-primary/90 hover:bg-primary text-white font-semibold rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Right: Info + Map */}
          <div className="flex flex-col gap-5">
            {/* Contact Info Cards */}
            {contacts.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Address" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 text-gray-400 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {icon}
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                    {label}
                  </p>

                  <p className="text-gray-700 group-hover:text-primary font-medium text-sm leading-relaxed">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md mt-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.0265970782522!2d121.02815318494143!3d14.566264730473002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90c1e3e3c2f%3A0xcbf6d51018a556a1!2sCentury%20Spire%20Office!5e0!3m2!1sen!2skr!4v1743144432858!5m2!1sen!2skr"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
