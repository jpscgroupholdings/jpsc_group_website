import emailjs from "emailjs-com";
import contactpic from "../assets/contact-us.png";

export const Newsletter = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cmcz0dj", // Correct EmailJS service ID
        "template_wozlk4l", // Replace with your actual EmailJS template ID
        e.currentTarget,
        "ARJM8CFqSKUs9l1KR" // Correct EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error); // Log the error for debugging
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="newsletter" data-aos="fade-up">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-3xl lg:text-4xl font-bold md:text-center flex items-center justify-center gap-4 ">
          GET IN TOUCH{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            With Us
          </span>
          <img
          src={contactpic} // Use the `image` property from the `features` array
          alt="analytics"
          className="w-[50px] h-[50px]" // Adjusted size for alignment
        />
        </h3>
      
        {/* Contact Form Section */}
        <section className="container py-10">
          <h3 className="text-2xl font-bold text-center mb-6">Contact Us</h3>
          <form onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name" // Ensure this matches the EmailJS template variable
                required
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-lg font-medium">
                Email Address:
              </label>
              <input
                type="text"
                id="address"
                name="address" // Ensure this matches the EmailJS template variable
                required
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message:
              </label>
              <textarea
                id="message"
                name="message" // Ensure this matches the EmailJS template variable
                required
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Contact Information Section */}
        <div className="text-center mt-12">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
            
          </h4>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            <span role="img" aria-label="phone">📞</span> +63 927-530-0844
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <span role="img" aria-label="email">📧</span> info@digitaloneph.com
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <span role="img" aria-label="location">📍</span> Kalayaan Ave, Makati, 1210 Metro Manila
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.0265970782522!2d121.02815318494143!3d14.566264730473002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90c1e3e3c2f%3A0xcbf6d51018a556a1!2sCentury%20Spire%20Office!5e0!3m2!1sen!2skr!4v1743144432858!5m2!1sen!2skr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
