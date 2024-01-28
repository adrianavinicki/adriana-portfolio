// import swiper react components
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";

// impoer swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxKeyboard,
  RxPencil2,
  RxPerson,
  RxShare1,
  RxTransform,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxKeyboard />,
    title: "Full Stack Web Development",
    description: "Expertise in building robust and scalable web applications.",
  },
  {
    icon: <RxPencil2 />,
    title: "Financial Consulting",
    description: "Financial analysis, planning, and strategic decision-making.",
  },
  {
    icon: <RxPerson />,
    title: "Team Leadership",
    description:
      "Proven track record in leading and managing high-performing teams.",
  },
  {
    icon: <RxTransform />,
    title: "Business Process Optimization",
    description: "Professionalizing operations for enhanced efficiency.",
  },
  {
    icon: <RxShare1 />,
    title: "Database Management",
    description: "Design of databases for data storage and retrieval.",
  },
  {
    icon: <RxRocket />,
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions to meet the unique needs of your business.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[180px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-[300px] rounded-lg px-6 py-8 flex
             sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
             transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8 flex flex-col h-full">
                <div className="mb-2 text-lg sm:text-base">{item.title}</div>
                <p className="max-w-[350px] flex-grow leading-normal text-[12px]">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl mt-auto">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent
                transition-all duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
