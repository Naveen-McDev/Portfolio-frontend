import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

// about component
function About() {
  // destructuring the global state
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;

  return (
    <div>
      {/* section title component */}
      <SectionTitle title={"About"} />
      <div className="flex sm:flex-col items-center">
        <div className="sm:h-[40vh] h-[60vh] sm:w-[90%] w-1/2">
          {/* image */}
          <lottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 sm:w-full w-1/2">
          {/* description1 */}
          <p className="text-white text-justify">{description1 || ""}</p>
          {/* description2 */}
          <p className="text-white text-justify">{description2 || ""}</p>
        </div>
      </div>
      <div className="py-5">
        {/* skills */}
        <h1 className="text-tertiary text-xl mb-10">
          Here are few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap justify-between gap-10 mt-5">
          {/* mapping the skills array  */}
          {skills.map((skill, index) => (
            <div className="border border-tertiary sm:w-[40%] sm:py-2 py-3 sm:px-5 px-10">
              <h1 className="text-tertiary sm:text-sm sm:text-center">
                {skill}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
