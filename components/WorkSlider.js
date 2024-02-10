// import swiper react components
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import Link from "next/link";

// impoer swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

//import next image
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Wonder Toys",
          subtitle: "a children's DREAM",
          description:
            "E-commerce website for children's toys where shopping becomes a game",
          path: "/project-1.png",
          link: "https://wondertoys.up.railway.app/",
        },
        {
          title: "Wonder Toys",
          subtitle: "a children's DREAM",
          description:
            "E-commerce website for children's toys where shopping becomes a game",
          path: "/wonder4.png",
          link: "https://wondertoys.up.railway.app/",
        },
        /* {
          title: "Wonder Toys",
          subtitle: "a children's DREAM",
          description:
            "E-commerce website for children's toys where shopping becomes a game",
          path: "/wonder1.png",
          link: "https://wondertoys.up.railway.app/",
        },
        {
          title: "Wonder Toys",
          subtitle: "a children's DREAM",
          description:
            "E-commerce website for children's toys where shopping becomes a game",
          path: "/wonder3.png",
          link: "https://wondertoys.up.railway.app/",
        },*/
      ],
    },
    {
      images: [
        {
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/project-2.png",
          link: "https://stringsandkeys.up.railway.app/",
        },
        /* {
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/strings4.png",
          link: "https://stringsandkeys.up.railway.app/",
        },*/
        {
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/strings1.png",
          link: "https://stringsandkeys.up.railway.app/",
        },
        /*{
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/strings3.png",
          link: "https://stringsandkeys.up.railway.app/",
        },*/
      ],
    },
  ],
};

//ACA hay que ver si podemos enganchar el link como en projects, solo puse uno de ejemplo arriba, la constante projects viene del otro portfolio
export const projects = [
  {
    title: "Wonder Toys",
    subtitle: "a children's DREAM",
    description:
      "E-commerce website for children's toys where shopping becomes a game",
    image: "./project-1.png",
    link: "https://wondertoys.up.railway.app/",
  },
  {
    title: "Strings And Keys",
    subtitle: "a door to CREATION",
    description:
      "E-commerce to buy musical instruments creators of the best music",
    image: "./project-2.png",
    link: "https://stringsandkeys.up.railway.app/",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[380px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-1 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center
                    justify-center group"
                    key={index}
                  >
                    <div
                      className="mt-5 flex items-center justify-center relative
                    over-flow-hidden group"
                    >
                      {/* image */}
                      <Image src={image.path} width={260} height={100} alt="" />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l
                    from-transparent  via-[#e838cc] to-[#4a22bd] opacity-0 
                    group-hover:opacity-80 transition-all duration-700"
                      >
                        {/* title */}
                        <div
                          className="absolute  bottom-0 translate-y-full
                        group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                        transition-all duration-300"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            {/*<div className="delay-100">Live</div>*/}
                            {/* title part 2 */}
                            <Link
                              href={image.link}
                              className="flex items-center justify-center"
                            >
                              <div
                                className="translate-y-[-50%] group-hover:translate-y-0
                            transition-all duration-300 delay-150"
                              >
                                Project
                              </div>
                              {/* icon */}
                              <div
                                className="text-xl translate-y-[-50%]
                            group-hover:translate-y-0 transition-all duration-300 delay-200"
                              >
                                <BsArrowRight />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
