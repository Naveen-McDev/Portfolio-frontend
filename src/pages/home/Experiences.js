import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title={"Experience"} />
      <div className="w-full flex py-10 sm:py-5 gap-[200px] sm:gap-10 sm:flex-col">
        <div className=" flex flex-col gap-10 border-l-2 border-[#135e4c82] sm:flex-row sm:overflow-x-scroll sm:w-full sm:border-l-0 sm:justify-center">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 sm:text-sm
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:ml-0"
                     : "text-white"
                 } `}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="w-[50vw] sm:w-full flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white text-xl sm:text-sm text-justify">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
