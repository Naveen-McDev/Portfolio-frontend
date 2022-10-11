import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

// project component
function Projects() {
  // state
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  // destructuring the global data
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div>
      {/* section title component */}
      <SectionTitle title={"Projects"} />
      <div className="w-full flex py-10 sm:py-5 gap-[150px] sm:gap-10 sm:flex-col">
        <div className=" flex flex-col gap-10 sm:gap-2 border-l-2 border-[#135e4c82] sm:flex-row sm:overflow-x-scroll sm:w-full sm:border-l-0">
          {/* mapping the projects array */}
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              {/* project title */}
              <h1
                className={`text-xl px-5 sm:text-sm sm:w-[150px]
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:ml-0"
                     : "text-white"
                 } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="w-[55VW] sm:w-full flex items-center justify-center gap-10 sm:flex-col">
          {/* image */}
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72 sm:w-full lg:hidden"
            style={{ objectFit: "cover" }}
          />

          <div className="flex flex-col gap-5">
            {/* title */}
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            {/* description */}
            <p className="text-white sm:text-sm">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white sm:text-sm">
              <a
                className="text-tertiary"
                href={projects[selectedItemIndex].link}
                target="_blank"
                rel="noreferrer"
              >
                Visit App
              </a>
            </p>
            <p className="text-white sm:text-sm">
              {projects[selectedItemIndex].technolgies}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
