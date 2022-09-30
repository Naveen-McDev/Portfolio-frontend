import React from "react";

function Header() {
  return (
    <div className="p-5 flex justify-around header">
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
        Courses
      </p>
      <p className="text-secondary  hover:text-white text4xl font-semibold header">
        Contacts
      </p>
    </div>
  );
}

export default Header;
