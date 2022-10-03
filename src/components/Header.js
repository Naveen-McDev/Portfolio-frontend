import React from "react";

function Header() {
  return (
    <div className="sm:hidden md:hidden lg:block p-5 flex justify-around items-center header bg-primary">
      <p className="text-secondary hover:text-white text4xl font-semibold header">
        Intro
      </p>
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        About
      </p>
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        Experiences
      </p>
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        Projects
      </p>
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        Contacts
      </p>
    </div>
  );
}

export default Header;
