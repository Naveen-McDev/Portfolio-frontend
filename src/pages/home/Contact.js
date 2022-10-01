import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const contactDetails = {
    name: "Naveen M",
    email: "naveenmcdeveloper@gmail.com",
    mobile: "9751496598",
    country: "INDIA",
  };

  return (
    <div>
      <SectionTitle title={"Contact"} />

      <div className="flex sm:flex-col py-10 items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(contactDetails).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary ">{contactDetails[key]}</span>
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
