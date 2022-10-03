import React from "react";
import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import LeftSidebar from "./LeftSidebar";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />

      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Hero />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <LeftSidebar />
        </div>
      )}
    </div>
  );
}

export default Home;
