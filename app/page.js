"use client";

import HeroSection from "./HeroSection/page";
import Navbar from "./components/Navbar-components/Navbar";
import AboutSection from "./AboutMe/page";
import ProjectSection from "./Projects/page";
import EmailSection from "./Contact/page";
import { useRef } from "react";

const Home = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar aboutRef={aboutRef} projectRef={projectRef} emailRef={emailRef} />
      <div className="container mx-auto max-w-screen-xl mt-10 lg:mt-24 p-10 xl:px-16">
        <HeroSection emailRef={emailRef} />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={projectRef}>
          <ProjectSection />
        </div>
        <div ref={emailRef}>
          <EmailSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
