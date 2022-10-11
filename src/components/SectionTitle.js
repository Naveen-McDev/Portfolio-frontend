import React from "react";

// section title
function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-center py-10 sm:py-7">
      {/* title */}
      <h1 id={title} className="text-3xl text-secondary">
        {title}
      </h1>
      {/* horzontal line */}
      <div className="w-60 h-[1px] bg-tertiary"></div>
    </div>
  );
}

export default SectionTitle;
