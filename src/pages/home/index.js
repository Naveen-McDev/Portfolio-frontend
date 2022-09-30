import React from "react";
import Header from "../../components/Header";
import About from "./About";
import Hero from "./Hero";

function Home() {
  return (
    <div className="bg-primary px-40 sm:px-5">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default Home;
