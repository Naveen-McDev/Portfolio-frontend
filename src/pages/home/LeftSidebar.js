import React from "react";
// left sidebar component
function LeftSidebar() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static  ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-[20px] sm:flex sm:flex-row sm:mb-10">
          <a
            href="https://github.com/Naveen-McDev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-line text-gray-400 text-[28px] p-3 border border-tertiary rounded-full"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/naveen-krish-83412b231/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-box-line text-gray-400 text-[28px]  p-3 border border-tertiary rounded-full"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] mt-[50px] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSidebar;
