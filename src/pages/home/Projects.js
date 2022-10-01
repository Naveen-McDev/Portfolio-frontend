import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title={"Projects"} />
      <div className="w-full flex py-10 sm:py-5 gap-[150px] sm:gap-10 sm:flex-col">
        <div className=" flex flex-col gap-10 sm:gap-2 border-l-2 border-[#135e4c82] sm:flex-row sm:overflow-x-scroll sm:w-full sm:border-l-0">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
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
        <div className="w-[60VW] sm:w-full flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72 sm:w-full"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white sm:text-sm">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white text-justify sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              expedita accusantium nulla ad odio quisquam consequuntur
              laudantium saepe ratione consectetur optio necessitatibus ut,
              impedit ducimus corrupti ullam veniam error non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
