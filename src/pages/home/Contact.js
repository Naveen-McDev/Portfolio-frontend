import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

// contact component
function Contact() {
  // destructure the global data
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      {/* section title component */}
      <SectionTitle title={"Contact"} />
      {/* contact info */}
      <div className="flex sm:flex-col py-10 items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-tertiary">{key} : </span>
                  <span className="text-tertiary ">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          {/* images */}
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_eroqjb7w.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
