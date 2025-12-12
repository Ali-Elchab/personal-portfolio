"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ emailRef, projectRef }) => {
  return (
    <section className="min-h-[70vh] md:min-h-screen  mb-16 sm:mb-24 flex flex-col justify-center items-center md:items-start">
      <div className="flex flex-col sm:grid sm:grid-cols-12 mt-2 sm:mt-5 mb-8 lg:mt-8 gap-12 sm:gap-6 items-center sm:justify-items-stretch w-full">
        {/* Mobile layout: image left of location text */}
        <div className="w-full sm:hidden flex items-center justify-center gap-4">
          <div className="w-48 h-auto">
            <Image
              src="/images/alichab.png"
              className="block w-full h-auto object-cover"
              alt="Ali Chab"
              width={300}
              height={300}
            />
          </div>
          <div className="text-sm uppercase tracking-[0.25em] text-blue-200 flex flex-wrap gap-2">
            <span>Beirut, Lebanon</span>
            <span>Canadian-Lebanese</span>
          </div>
        </div>

        {/* Desktop/tablet image */}
        <div className="hidden sm:flex md:order-last sm:col-span-5 w-full items-center justify-center md:justify-end lg:mt-0">
          <div className="w-48 sm:w-60 md:w-96 h-auto mx-auto md:mx-0">
            <Image
              src="/images/alichab.png"
              className="block mx-auto w-full h-auto object-cover"
              alt="Ali Chab"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="col-span-7 text-center sm:text-left flex flex-col gap-6 w-full items-center sm:items-start">
          <div className="hidden sm:flex text-sm uppercase tracking-[0.25em] text-blue-200 flex-wrap gap-3 justify-start">
            <span>Beirut, Lebanon</span>
            <span>Canadian-Lebanese</span>
          </div>
          <h1 className="text-white mb-0 sm:mb-2 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              Ali Al Hadi Elchab
            </span>
            <br />
            <TypeAnimation
              sequence={["Software Developer", 1100, "Flutter Developer"]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4 md:w-full text-left leading-relaxed">
            I'm a Software Developer who builds real, working products -- not just screens or "hello world" APIs. I prioritize
            clean architecture, stable logic, and systems that perform reliably in real-world use.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() =>
                emailRef?.current &&
                window.scrollTo({
                  top: emailRef.current.offsetTop-130,
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 w-full sm:w-40 rounded-full sm:mr-4 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <button
              onClick={() =>
                projectRef?.current &&
                window.scrollTo({
                  top: projectRef.current.offsetTop -130,
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 w-full sm:w-40 rounded-full sm:mr-4 bg-transparent hover:bg-slate-800 border border-white text-white"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
