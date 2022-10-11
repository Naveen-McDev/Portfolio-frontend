import React from "react";

// header component
function Header() {
  const handleScroll = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="sm:hidden md:hidden lg:flex p-5 flex justify-around items-center header bg-primary">
      {/* intro */}

      <p
        onClick={handleScroll}
        className="text-secondary hover:text-white text4xl font-semibold header"
      >
        Intro
      </p>

      {/* about */}
      <a href="#About">
        <p className="text-secondary  hover:text-white text4xl font-semibold header">
          About
        </p>
      </a>

      {/* experiences */}
      <a href="#Experience">
        <p className="text-secondary  hover:text-white text4xl font-semibold header">
          Experience
        </p>
      </a>

      {/* projects */}
      <a href="#Projects">
        <p className="text-secondary  hover:text-white text4xl font-semibold header">
          Projects
        </p>
      </a>
      {/* contacts */}
      <a href="#Contact">
        <p className="text-secondary  hover:text-white text4xl font-semibold header">
          Contact
        </p>
      </a>
    </div>
  );
}

export default Header;
