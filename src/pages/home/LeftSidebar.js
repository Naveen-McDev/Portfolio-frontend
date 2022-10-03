import React from "react";
// left sidebar component
function LeftSidebar() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static sm:hidden">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-[100px]">
          {/* intro */}
          <p className=" text-gray-400 -rotate-90">Intro</p>
          {/* about */}
          <p className=" text-gray-400 -rotate-90">About</p>
          {/* experience */}
          <p className=" text-gray-400 -rotate-90">Experience</p>
          {/* project */}
          <p className=" text-gray-400 -rotate-90">Projects</p>
          {/* contact */}
          <p className=" text-gray-400 -rotate-90">Contact</p>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] mt-[50px] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSidebar;
