import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; 
import { motion } from "framer-motion";
import { experiences } from "../constants";

import sectionWrapper from "../hoc/sectionWrapper";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

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

const ExperienceCard = ({ experiences }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experiences.date}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {" "}
        <img
          src={experiences.icon}
          alt={`jouse`}
          className="w-[60%] h-[60%]  object-contain "
        />{" "}
      </div>
    }
  >
    <div className="">
      {" "}
      <h3 className="text-white text-[24px] font-bold">{experiences.title} </h3>
      <p className={`text-sm font-lora uppercase`}>
        {experiences.company_name}{" "}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {" "}
      {experiences.points.map((point, index) => (
        <li
          key={`experience-point ${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}{" "}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <motion.div variants={textVariant()}>
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
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experiences={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default sectionWrapper(Experience, "");
