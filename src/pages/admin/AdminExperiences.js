import React from "react";
import { useSelector } from "react-redux";

function AdminExperiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      <div className="flex justify-end">
        <button className="bg-primary px-5 py-2 text-white">
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {experiences.map((experience) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-3">
            <h1 className="text-primary text-xl font-bold">
              {experience.period}
            </h1>
            <hr />
            <h1>Company : {experience.company}</h1>
            <h1>Role : {experience.title}</h1>
            <h1>{experience.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-red-500 text-white px-5 py-2">
                Delete
              </button>
              <button className="bg-primary text-white px-5 py-2">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminExperiences;
