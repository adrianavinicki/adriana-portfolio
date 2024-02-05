"use client";

// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import { useForm } from "react-hook-form";

export const formData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  //const { register, handleSubmit, onSubmit } = useContactForm();

  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left flex items-center
      justify-center h-full"
      >
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let´s<spam className="text-accent"> connect.</spam>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto "
            //onSubmit={handleSubmit(onSubmit)}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="input"
                // {...register("name")}
                onChange={(e) => formData.name}
              />
              <input
                type="text"
                placeholder="example@domain.com"
                className="input lowercase"
                //{...register("email")}
                onChange={(e) => formData.email}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              //{...register("subject")}
              onChange={(e) => formData.subject}
            />
            <textarea
              placeholder="Type your message"
              className="textarea"
              //{...register("message")}
              onChange={(e) => formData.message}
            ></textarea>
            <button
              className="bt rounded-full border border-white/50
            max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
             overflow:hidden hover:border-accent group"
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0 
              transition-all duration-500 "
              >
                Let´s talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
