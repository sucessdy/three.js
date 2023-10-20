import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa"; // Updated close icon import
import { styles } from "../styles";

const Links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Portfolio", link: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center justify-between py-5 relative top-0 z-20 `}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <h3 className="text-white font-bold uppercase"> Mukta </h3>
        <ul
          className={`list-none hidden sm:flex flex-row gap-10 ${
            toggle ? "hidden" : ""
          }`}
        >
          <li className="flex justify-center items-center gap-9 font-bold font-lora text-md ">
            {Links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                onClick={() => {
                  setActive(link.name);
                  setToggle(false); // Close the menu when a link is clicked
                  window.scrollTo(0, 0);
                }}
                className={`${
                  active === link.name ? "text-white" : "hover:text-secondary"
                } text-[16px] cursor-pointer font-Raleway text-md font-bold `}
              >
                {link.name}
              </Link>
            ))}
          </li>
        </ul>
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            id="menu-btn"
            onClick={handleToggle}
            className="w-14 h-7 cursor-pointer"
          >
            {toggle ? <FaTimes /> : <HiOutlineMenuAlt3 />}
          </button>
          <div
            className={`${
              !toggle ? "hidden" : ""
            } p-6 bg-gradient-to-l from-zinc-800 to-zinc-500 opacity-50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-12">
              {Links.map((link) => (
                <li
                  key={link.link}
                  className="flex justify-end items-center gap-12 flex-col font-semibold text-black"
                >
                  <Link 
                    to={link.link}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.name);
                      window.scrollTo(0, 0);
                    }}
                    className={`${
                      active === link.name
                        ? "text-white"
                        : "hover:text-slate-200"
                    } text-[16px] cursor-pointer font-manrope `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
