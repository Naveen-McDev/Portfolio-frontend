import React from "react";
import { useSelector } from "react-redux";
// hero component
function Hero() {
  // destructuring the global state
  const { portfolioData } = useSelector((state) => state.root);
  const { intros } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intros;

  return (
    <div className="h-[80vh] flex flex-col items-start justify-center gap-3 py-15 sm:pt-40">
      {/* welcome text */}
      <h1 className="text-white">{welcomeText || ""}</h1>
      {/* full name */}
      <h1 className="text-secondary text-7xl sm:text-5xl font-semibold">
        {firstName || ""} {lastName || ""}
      </h1>
      {/* caption */}
      <h1 className="text-6xl sm:text-3xl text-white font-semibold">
        {caption || ""}
      </h1>
      {/* description */}
      <p className="text-white w-2/3 sm:w-full sm:text-justify">
        {description || ""}
      </p>
      {/* get Started button */}
      <div className="flex gap-10">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/files-ac663.appspot.com/o/Naveen%20M.pdf?alt=media&token=d6bec0ee-8f7f-43ab-9c44-77ef3ae5a9f9"
          download="NaveenResume.pdf"
        >
          <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
            View Resume
          </button>
        </a>
        <a href="https://github.com/Naveen-McDev">
          <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
