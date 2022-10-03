import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title={"Contact"} />

      <div className="flex sm:flex-col py-10 items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(contact).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary ">{contact[key]}</span>
            </p>
          ))}
          <p className="text-white">{"}"}</p>
        </div>
        <div className="h-[400px]">
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
