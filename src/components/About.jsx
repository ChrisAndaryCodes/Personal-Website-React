import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-xl mt-5">
            I'm a 21-year-old senior majoring in Computer Science at Santa Clara
            University. My fascination with computers began early, fueled by a
            passion for video games. This lifelong interest in technology led me
            to pursue a degree in Computer Science. Although I started coding in
            college, I've fully embraced it, continuously honing my skills and
            expanding my knowledge. Currently, I'm actively seeking a software
            engineering internship to further develop my abilities and gain
            real-world experience.
          </p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
          className="pb-8"
        >
          <p className="text-xl">
            Beyond the world of coding, I am an avid sports enthusiast. My
            interests range from soccer and basketball to weightlifting and
            mixed martial arts. These activities not only keep me physically
            active but also instill values of teamwork, discipline, and
            resilience that I bring into my professional life. Additionally, I
            enjoy spending time with friends and working on career-oriented
            personal projects, which contribute to my overall growth and
            well-being.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
