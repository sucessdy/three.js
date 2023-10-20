import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import sectionWrapper from "../hoc/sectionWrapper";

const variants = {
  initial: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[280px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full border[20px] bg-gradient-to-r from-fuchsia-500 to-purple-600  opacity-90 rounded-[20px] p-[1px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className=" bg-gradient-to-b from-zinc-700 to-zinc-800  rounded-[20px]  py-5 px-12 min-h-[280px] flex justify-evenly items-center sm:flex-col md:flex md:flex-col  "
        >
          <img
            src={icon}
            alt="title"
            className="h-16 w-16 object-contain items-center "
          />
          <h3 className="text-center font-Manrope font-bold text-[20px] mx-auto">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="w-full px-8 mt-9 h-full"
      >
        <p className="text-sm font-lora uppercase"> Introduction</p>
        <h2 className="text-[28px] font-extrabold sm:text-[40px] mt-1 text-gray-200 font-Manrope leading-13">
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-slate-400 dark:text-secondary text-[17px] max-w-8xl w-full font-Manrope"
      >
        I'm a versatile web developer proficient in HTML, CSS, JavaScript,
        React, Tailwind CSS, and WordPress. I specialize in crafting visually
        stunning and user-friendly websites that provide exceptional digital
        experiences. My focus on UI/UX ensures seamless navigation and
        captivating designs across various platforms{" "}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-evenly items-center  p-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            className={`z-100`}
          />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(About, "about");

// export default About;
