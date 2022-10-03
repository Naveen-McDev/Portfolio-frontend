import React from "react";

// header component
function Header() {
  return (
    <div className="sm:hidden md:hidden lg:block p-5 flex justify-around items-center header bg-primary">
      {/* intro */}
      <p className="text-secondary hover:text-white text4xl font-semibold header">
        Intro
      </p>
      {/* about */}
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        About
      </p>
      {/* experiences */}
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        Experiences
      </p>
      {/* projects */}
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        Projects
      </p>
      {/* contacts */}
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        Contacts
      </p>
    </div>
  );
}

export default Header;
