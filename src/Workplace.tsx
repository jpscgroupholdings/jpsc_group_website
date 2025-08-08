import front from "./assets/workplace/front_desk.jpg"
import lobby from "./assets/workplace/lobby.jpg"
import other_room from "./assets/workplace/other_room.jpg"
import people1 from "./assets/workplace/people1.jpg"
import people2 from "./assets/workplace/people2.jpg"
import people3 from "./assets/workplace/people3.jpg"
import people4 from "./assets/workplace/people4.jpg"
import people5 from "./assets/workplace/people5.jpg"
import people6 from "./assets/workplace/people6.jpg"
import people7 from "./assets/workplace/people7.jpg"
import people8 from "./assets/workplace/people8.jpg"
import people9 from "./assets/workplace/people9.jpg"
import "lightbox2/dist/css/lightbox.min.css";

import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';





export const Workplace = () => {
  return (
    <section id="workplace" className="container py-24 sm:py-32"  data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center"   data-aos="fade-up">
        Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Workplace{" "}
        </span>
      </h2>


      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8 ">
        Explore our workplace through these images.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        <a href={front} data-lightbox="workplace" data-title="Workplace 1">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={front}
              alt="Workplace 1"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={lobby} data-lightbox="workplace" data-title="Workplace 2">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={lobby}
              alt="Workplace 2"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={other_room} data-lightbox="workplace" data-title="Workplace 3">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={other_room}
              alt="Workplace 3"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
      
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center"   data-aos="fade-up">
        Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Explore our people through these images.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"   data-aos="fade-up">
        <a href={people1} data-lightbox="events" data-title="Event 1">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people1}
              alt="Workplace 1"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people2} data-lightbox="events" data-title="Event 2">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people2}
              alt="Workplace 2"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people3} data-lightbox="events" data-title="Event 3">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people3}
              alt="Workplace 3"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people4} data-lightbox="events" data-title="Event 4">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people4}
              alt="Workplace 4"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people5} data-lightbox="events" data-title="Event 5">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people5}
              alt="Workplace 5"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people6} data-lightbox="events" data-title="Event 6">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people6}
              alt="Workplace 6"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people7} data-lightbox="events" data-title="Event 6">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people7}
              alt="Workplace 7"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people8} data-lightbox="events" data-title="Event 6">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people8}
              alt="Workplace 8"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={people9} data-lightbox="events" data-title="Event 6">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg ">
            <img
              src={people9}
              alt="Workplace 9"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
      </div>


    </section>
  );
};
