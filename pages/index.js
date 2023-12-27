// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10"
      >
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Financial Mind, Tech Heart
            <br />
            <span className=" text-accent">
              Navigating the Digital Landscape
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-16 break-words"
          >
            For years, I navigated finance and business, leading impactful
            projects and launching companies across Latin America. Seeking
            personal and professional growth, I transitioned to technology. As a
            Full Stack Developer, I specialize in crafting robust backend
            systems. My philosophy draws from skills in my prior career — adept
            strategic planning, adaptability, and team leadership, offering a
            unique approach to problem-solving in the ever-evolving tech
            landscape.
          </motion.p>
          {/*  btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div>image</div>
    </div>
  );
};

export default Home;
