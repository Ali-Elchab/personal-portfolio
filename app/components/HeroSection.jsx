/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left lg:w-[40rem]">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold sm:text-5xl  ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">Hello, I'm </span>
            <br />
            <TypeAnimation
              sequence={["Ali", 1000, "Full Stack Developer", 1000, "Mobile Developer", 1000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-500  hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-transparebt hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-lg  w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/alichab.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Ali Chab"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
