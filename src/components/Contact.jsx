import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import sectionWrapper from "../hoc/sectionWrapper";
import emailjs from "@emailjs/browser";
// import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {};
  // const handleSubmit = (e) => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setForm((prevForm) => ({
    //   ...prevForm,
    //   [name]: value,
    // }));
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Handle your form submission logic here
    // api key
    // bleTstMfJYecB3mVG

    // template_jgtmpzm

    // service_2t1mb7n
    // above the service id
    emailjs
      .send(
        "service_2t1mb7n",
        "template_jgtmpzm",
        {
          from_name: form.name,
          to_name: "Mukta",
          from_email: form.email,
          to_email: "contact@sucessdy.pro",
          message: form.message,
        },
        "bleTstMfJYecB3mVG"
      )
      .then(
        () => {
          setLoading(false);
          alert("thank you, i will get back to you as soon as possible ");

          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("something went wrong ");
        }
      );
  };

  return (
    <div
      id="contact"
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className="font-Manrope text-4xl font-bold">Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="p-2  bg-tertiary py-4 px-6 placeholder:text-secondary text-white  rounded-lg outlined-none border-none font-medium border border-gray-300"
            />
          </label>
          {/* email */}

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your E-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="p-2  bg-tertiary py-4 px-6 placeholder:text-secondary text-white  rounded-lg outlined-none border-none font-medium border border-gray-300" 
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message"
              className="p-2 ro  bg-tertiary py-4 px-6 placeholder:text-secondary text-white  rounded-lg outlined-none border-none font-medium border border-gray-300"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary  py-3 px-8 outline-none w-fit text-white fonnt-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "Sending..." : "send"}{" "}
          </button>
          {/* Add similar sections for email and message inputs */}
          {/* Add a submit button */}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <EarthCanvas />  */}
      </motion.div>
    </div>
  );
};

export default sectionWrapper(Contact, "contact");
