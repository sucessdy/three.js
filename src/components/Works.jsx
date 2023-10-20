import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
// import { styles } from '../styles';
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import sectionWrapper from "../hoc/sectionWrapper";
const ProjectCard = ({
  name,
  index,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className={`bg-tertiary bg-opacity-90 first-letter: p-5 rounded-2xl sm:w-[360px] w-full flex-col-reverse`}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl "
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className=" black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              {" "}
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 ">  
        <h3 className="text-white font-bold text-[23px] font-Manrope "> {name}</h3>
        <p> {description}</p>
        </div> 
        <div className="mt-4 flex flex-wrap gap-2 ">{tags.map((tag) =>( 
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name} </p>
       ))} </div>
      </Tilt>
    </motion.div>
  );
};

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
const Works = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="w-full px-8 mt-9 h-full"
    >
      <p className="text-sm font-lora uppercase"> My name</p>
      <h2 className="text-[28px] font-extrabold sm:text-[40px] mt-1 text-gray-200 font-Manrope leading-13">
        Project
      </h2>
      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default sectionWrapper(Works , "");
