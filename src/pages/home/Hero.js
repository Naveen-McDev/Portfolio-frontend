import React from "react";

function Hero() {
  return (
    <div className="h-[80vh] flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, I'm</h1>
      <h1 className="text-secondary text-7xl font-semibold">Naveen</h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        I build things for Web
      </h1>
      <p className="text-white w-2/3">
        I am a Full Stack developer/Instructor. Currently I'm Working as a
        Junior Full Stack Developer in India. Also sharing my knowledge to the
        people that I have gained in my career through online.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
