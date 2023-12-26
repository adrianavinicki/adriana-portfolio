// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Wonder Toys",
          path: "./project-1.png",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
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

const WorkSlider = () => {
  return <div>Work Slider</div>;
};

export default WorkSlider;
