// testimonial data
const testimonialData = [
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
      "He trabajado con Adriana muchos años, en los cueles hemos hecho un excelente equipo de trabajo. Adriana es una profesional con un alto seniority. Gran conocimiento de la función y tarea Adm/Financiera, marcado perfil para el trabajo en corporaciones internacionales, experiencia, manejo de situaciones conflictivas, adaptación a los cambios y al uso de diferentes herramientas ... en fin, mucho de lo que soy como profesional hoy se lo debo a Adriana.Y no solo eso, sino que también contribuyo a formar en mi una fuerte base (técnica, de razonamiento) que me sirvió para destacarme en futuros entornos muy competitivos. Una profesional con un fuerte perfil Administrativo Financiero, pero totalmente volcada a la obtención de resultados y a la mejora en la performance de la organización.",
  },
  {
    image: "/carlos.png",
    name: "Carlos Fidanza",
    position: "Swiss Just Latinoamerica",
    message:
      "He compartido con Adriana durante más de 15 años el Comité de la Cámara Argentina de Venta Directa, en la cual hemos trabajado sobre proyectos correspondientes a la industria, y compartido información de alto valor apar el cuidado de las Empresas que conforman la Cámara, considerando que su aportes y trabajos han podido ser aplicados en su totalidad. En el último año, tuve la oportunidad de compartir, desarrollar e implementar el sistema de información, planning, prsupuesto y control Coprorativo ne Essen Alumninio S.A., siendo Adriana la Project Leader del proceso que se llevo a cabo en tiempos verdaderamente muy cortos. Recomiendo a Adriana, no sólo por sus conocimientos, practicidad y efectividad, sino además por sus conocimientos de la Venta Directa y sobre todo por su calidad personal, siendo ejemplo de honestidad, integridad y valores humanos.",
  },
  {
    image: "/hilda.png",
    name: "Hilda Bovolon",
    position: "Direct Selling Expert/Consultant, Business, Marketing & Sales",
    message:
      "I worked with Adriana for many years and she is a great resource with a solid knowledge of her job, and is always willing to help others. Adriana works with passion, is reliable and a team player. It was a pleasure to work with her!",
  },
];

// import swiper react components
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";

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
        {
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
        },
      ],
    },
    {
      images: [
        {
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/LogoWhite.png",
          link: "https://stringsandkeys.up.railway.app/",
        },
        {
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/strings4.png",
          link: "https://stringsandkeys.up.railway.app/",
        },
        {
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/strings1.png",
          link: "https://stringsandkeys.up.railway.app/",
        },
        {
          title: "Strings And Keys",
          subtitle: "a door to CREATION",
          description:
            "E-commerce to buy musical instruments creators of the best music",
          path: "/strings3.png",
          link: "https://stringsandkeys.up.railway.app/",
        },
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

const Testimoniallider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
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
                      className="flex items-center justify-center relative
                    over-flow-hidden group"
                    >
                      {/* image */}
                      <Image src={image.path} width={200} height={100} alt="" />
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
                            <div className="delay-100">Live</div>
                            {/* title part 2 */}
                            <div
                              className="translate-y-[500%] group-hover:translate-y-0
                            transition-all duration-300 delay-150"
                            >
                              Project
                            </div>
                            {/* icon */}
                            <div
                              className="text-xl translate-y-[500%]
                            group-hover:translate-y-0 transition-all duration-300 delay-200"
                            >
                              <BsArrowRight />
                            </div>
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

export default TestimonialSlider;
