import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Figma",
    "HTML",
    "CSS",
    "Bootstrap",
    "SAAS",
    "Tailwind CSS",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Postman",
  ];

  return (
    <div>
      <SectionTitle title={"About"} />
      <div className="flex sm:flex-col items-center">
        <div className="sm:h-[40vh] h-[60vh] sm:w-[90%] w-1/2">
          <lottie-player
            src="https://assets8.lottiefiles.com/private_files/lf30_WdTEui.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 sm:w-full w-1/2">
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap justify-evenly gap-10 mt-5">
        { skills.map((skill, index) => (
            <div className="border border-tertiary sm:w-[40%] sm:py-2 py-3 sm:px-5 px-10">
                <h1 className="text-tertiary sm:text-sm sm:text-center">{skill}</h1>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default About;
