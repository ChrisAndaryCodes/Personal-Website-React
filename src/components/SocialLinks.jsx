import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-500">
          <a
            href="https://www.linkedin.com/in/chris-andary"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn
              <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800">
          <a
            href="https://github.com/ChrisAndaryCodes"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Github
              <FaGithub size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-green-300">
          <a
            href="mailto:andarychris@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Email
              <HiOutlineMail size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://docs.google.com/document/d/11qJKDI-ALB2FLQqrs9vZ5r631rMrphvfLwbdir9DxB8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Resume
              <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
