import React from "react";
import { useSelector } from "react-redux";
// hero component
function Hero() {
  // destructuring the global state
  const { portfolioData } = useSelector((state) => state.root);
  const { intros } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intros;

  return (
    <div className="h-[80vh] flex flex-col items-start justify-center gap-8 py-20 sm:pt-40">
      {/* welcome text */}
      <h1 className="text-white">{welcomeText || ""}</h1>
      {/* full name */}
      <h1 className="text-secondary text-7xl font-semibold">
        {firstName || ""} {lastName || ""}
      </h1>
      {/* caption */}
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        {caption || ""}
      </h1>
      {/* description */}
      <p className="text-white w-2/3 sm:w-full sm:text-justify">
        {description || ""}
      </p>
      {/* get Started button */}
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
