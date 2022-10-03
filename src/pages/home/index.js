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

// home component
function Home() {
  // destructuring the global state
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      {/* header component */}
      <Header />
{/* if portfolio data is present */}
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
