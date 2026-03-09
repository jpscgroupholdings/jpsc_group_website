import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
{
  /* 
interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];*/
}

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container pb-24"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Message from the
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          CEO{" "}
        </span>
      </h2>

      <div className="mt-8 p-8 border rounded-lg shadow-lg ">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0">
            <Avatar>
              <AvatarImage
                alt="CEO Avatar"
                src="https://www.google.com/search?sca_esv=0575d398e4833097&sxsrf=AHTn8zr_Vlk9TUfKzOBog_FSEvqcSweszg:1744611015852&q=question+mark&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBkzPWUS0OtApxR2914vrjk60CMaA0jPMd-1UByCaBk9RkR5TYqOiT6ScESjovcjoQvczWGzfl03gMqmV3swMnlaHY7h-y8maWsVlqqHOlm1aI-VEUVb8-3QW0ZUss5AXthH1HmZDs_Q0k_NzasqwQkpVyZMWLACnc0yvEfyljhT7myXSpQ&sa=X&ved=2ahUKEwif0fu-7taMAxXgRaQEHYxrGtUQtKgLegQIFRAB&biw=1920&bih=951&dpr=1#vhid=srqabUSzLOxBiM&vssid=mosaic"
              />
              <AvatarFallback>CEO</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Harrison Choo</h3>
            <p className="text-muted-foreground">CEO Founder</p>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed">
          At JPSC Group Holdings Inc., we view challenges as opportunities for
          growth and innovation as the driver of transformation. In a rapidly
          evolving business landscape, adaptability, insight, and strategic
          thinking are essential. Through forward-looking solutions and strong
          partnerships, we support our companies in building resilient
          operations and sustainable growth. From consulting and technology to
          business development, our team is committed to delivering excellence
          and helping organizations move confidently toward the future.
        </p>
      </div>
    </section>
  );
};
