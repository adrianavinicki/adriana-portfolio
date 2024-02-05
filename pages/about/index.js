import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNode,
} from "react-icons/fa";

import { SiFramer } from "react-icons/si";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import counterUp from "react-countup";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={"id"} />,
          <FaCss3 key={"id"} />,
          <FaJs key={"id"} />,
          <FaReact key={"id"} />,
          <FaNode key={"id"} />,
          <SiFramer key={"id"} />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key={"id"} />],
      },
    ],
  },
  {
    /*
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  */
  },
  {
    title: "experience",
    info: [
      {
        title: "Finance Manager - Manuel Mezquita SA",
        stage: "(2022 - Present)",
      },
      {
        title: "Finance Manager - Propel & CAMISAJU",
        stage: "(2018 - 2022)",
      },
      {
        title: "Finance Manager - Ed Vertice SRL",
        stage: "(2015 - 2018)",
      },
      {
        title: "Controller Southern Cone - Emerson",
        stage: "(2012 - 2013)",
      },
      {
        title: "Latin America Controller - Amway",
        stage: "(2010 - 2011)",
      },
      {
        title: "Finance Manager Arg/Chi/Uru - Amway",
        stage: "(1992 - 2010)",
      },
      {
        title: "Planning & Reporting Supervisor - Tupperware",
        stage: "(1983 - 1992)",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full Stack Developer - Henry",
        stage: "(2023)",
      },
      {
        title: "MBA - IDEA, BA, Argentina",
        stage: "(1999)",
      },
      {
        title: "Public Accountant/Economics - UBA, BA, Argentina",
        stage: "(2006)",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 mt-20 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6"
      >
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[26px] mt-10 xl:text-5xl xl:mt-3 h2"
          >
            Finance to Tech:
            <br />
            <spam className="text-accent">A Journey of Leadership</spam>
            <br />& System Building
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[14px] max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Dedicated finance professional with impactful leadership experience,
            transitioning to technology. Passionate about building robust
            backend systems for web applications, leveraging skills from
            previous career to bring a unique perspective to tech challenges.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div>
                {/* it experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2-xl xl:text-4-xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={1} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Years of full stack developer experience
                  </div>
                </div>
              </div>
              <div>
                {/* projects finished */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2-xl xl:text-4-xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={2} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Projects Finished
                  </div>
                </div>
              </div>
              <div>
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2-xl xl:text-4-xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={25} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Years of finance experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 
          after:h-[2px] after:bg-white after-absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="mb-10 xl:py-6 flex flex-col gap-y-1 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="text-[14px] mt-0.5 first-line:font-light md:mb-0">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">
                    <div> </div>
                    <div>{item.stage}</div>
                  </div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
