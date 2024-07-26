import React from "react";
import PortfolioImage from "../assets/PortfolioImage.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="w-full flex flex-col justify-center lg:w-auto md:mt-0 mt-20">
          <div className="flex flex-col justify-center h-full">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-5xl sm:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
            >
              Chris Andary
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-white via-red-500 to-red-600 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent"
            >
              CS @Santa Clara University
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-white"
            >
              I am experienced in Python, and C++ programming languages with a
              keen interest in continuously expanding my knowledge in technology
              and software engineering. As I aspire to build a career in
              software engineering, I am enthusiastic about applying my skills
              to develop innovative solutions and contribute to impactful
              projects.
            </motion.p>
          </div>
          <div>
            <Link to="portfolio" smooth={true} duration={500}>
              <motion.button
                variants={container(1.2)}
                initial="hidden"
                animate="visible"
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-white via-red-500 to-red-600 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineArrowRightAlt size={25} className="ml-1" />
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-30 md:mt-2">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              src={PortfolioImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
