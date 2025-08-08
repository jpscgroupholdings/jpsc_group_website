{/* import { LogoIcon } from "./Icons"; */}
import logo from "../assets/logo.png";


export const Footer = () => {
  return (
    <footer id="footer" data-aos="fade-up">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2" data-aos="fade-right">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <img src={logo} alt="Company Logo" className="h-8 w-auto mr-2" />
            JPSC
          </a>
          <p className="mt-4 opacity-60">
            JPSC Group Holdings Inc. is a leading provider of innovative solutions
          </p>
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
       {/*
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/about-another"
              className="opacity-60 hover:opacity-100"
            >
              Company
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/missionvision-another"
              className="opacity-60 hover:opacity-100"
            >
              Mission & Vision
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="history-another"
              className="opacity-60 hover:opacity-100"
            >
              History
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href={credits}
              className="opacity-60 hover:opacity-100"
            >
              Credits
            </a>
          </div>
        </div> */}
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 JPSC Group Holdings Inc{" "}
        </h3> 
      </section>
    </footer>
  );
};
