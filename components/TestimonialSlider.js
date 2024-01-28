// import swiper react components
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";

// impoer swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import required modules
import { Navigation, Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";

//import next image
import Image from "next/image";

// data
const testimonialSlider = [
  {
    image: "/daniel.png",
    name: "Daniel Puggioni",
    position: "ACS Manager - LATAM at Amway",
    message:
      "Adriana is an excellent professional with extensive experience in Administration and Finance department, obtained in first-class multinationals. It's a great group leader, oriented to get results, adding value and continuous improvement of processes.",
  },
  {
    image: "/danilo.png",
    name: "Danilo Saicali",
    position: "Partner at Santa Apolonia Particip.Ltda",
    message:
      "Adriana is a competent F&A professional, has a balanced position while pursuing the strategic and budget goals, team worker and skilled to work with people. Result oriented. I´m proud to have had Adriana in my team.",
  },
  {
    image: "/norma.png",
    name: "Norma Treviño",
    position: "Executive Coach - ICF ACC - Talent Management",
    message:
      "Adriana is a seasoned executive with a high level of technical expertise in her field along with a detailed attention to the human factor of all work interactions. These traits make of Adriana a strong team leader and a great peer to work with and learn from. I certainly look forward to have the opportunity to work with her in the future.",
  },
  {
    image: "/roman.png",
    name: "Roman Jasidakis",
    position: "Manager at Nuvo Cosméticos",
    message:
      "I have worked with Adriana for many years, in which we have made an excellent work team. Adriana is a professional with high seniority. Great knowledge of the Adm/Financial function and task, a strong profile for working in international corporations, experience, handling conflict situations, adaptation to changes and the use of different tools... in short, a lot of what I am as a professional Today I owe it to Adriana. And not only that, but it also contributed to forming a strong base in me (technical, reasoning) that helped me stand out in future very competitive environments. A professional with a strong Financial Administrative profile, but totally dedicated to obtaining results and improving the organization's performance.",
  },
  {
    image: "/carlos.png",
    name: "Carlos Fidanza",
    position: "Swiss Just Latinoamerica",
    message:
      "I have shared with Adriana more than 15 years in the Committee of the Argentine Chamber of Direct Sales, we have worked on projects corresponding to the industry, and shared information of high value for the care of the Companies that make up the Chamber, considering that their contributions and works have been able to be applied in their entirety. In the last year, I had the opportunity to share, develop and implement the information, planning, budget and Corporate control system in an important Direct Selling company, with Adriana being the Project Leader of the process that was carried out in truly very short times. I recommend Adriana, not only for her knowledge, practicality and effectiveness, but also for her knowledge of Direct Selling and above all for her personal quality, being an example of honesty, integrity and human values.",
  },
  {
    image: "/hilda.png",
    name: "Hilda Bovolon",
    position: "Direct Selling Expert/Consultant, Business, Marketing & Sales",
    message:
      "I worked with Adriana for many years and she is a great resource with a solid knowledge of her job, and is always willing to help others. Adriana works with passion, is reliable and a team player. It was a pleasure to work with her!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[470px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center md:flex-row
            gap-x-8 h-full px-16"
            >
              {/* avatar, name, position */}
              <div
                className="w-full max-w-[300px] flex flex-col
              xl:justify-center items-center relative mx-auto xl:mx-0"
              >
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div>
                {/* quote & messages */}
                <div
                  className="flex-1 flex flex-col justify-center
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                xl:before:h-[200px] relative xl:pl-20"
                >
                  {/* quote icon */}
                  <div className="mb-0">
                    <FaQuoteLeft className="text-sm xl:text-6xl text-white/20 mx-auto md:mx-0" />
                  </div>
                  {/* message */}
                  <div className="xl:text-xs text-center md:text-left text-xs">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
