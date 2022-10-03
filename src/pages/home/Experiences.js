import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

// experiences component
function Experiences() {
  // state
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  // destructuring the global state
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      {/* section title component */}
      <SectionTitle title={"Experience"} />
      <div className="w-full flex py-10 sm:py-5 gap-[200px] sm:gap-10 sm:flex-col">
        <div className=" flex flex-col gap-10 border-l-2 border-[#135e4c82] sm:flex-row sm:overflow-x-scroll sm:w-full sm:border-l-0">
          {/* mapping the experiences array */}
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              {/* period */}
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
          {/* title */}
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {/* company */}
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white text-xl sm:text-sm text-justify">
            {/* description */}
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
