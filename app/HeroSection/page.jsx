/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ emailRef }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-5 mb-8 lg:mt-8">
        <div class="md:order-last order-none my-4 md:mb-0 sm:col-span-5 md:justify-end flex items-center justify-center  lg:mt-0">
          <div class="w-80 h-92 flex items-center justify-end">
            <Image src="/images/alichab.png" className="w-full h-full object-cover" alt="Ali Chab" width={300} height={300} />
          </div>
        </div>
        <div className="col-span-7 place-self-left text-center sm:text-left ">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold sm:text-5xl  ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">Hello, I'm Ali Hadi </span>
            <br />
            <TypeAnimation
              sequence={["Full Stack Developer", 1000, "Mobile Developer", 1000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            I'm a passionate software developer with three years of IT experience, skilled in creating intuitive web and mobile
            applications. My technical background has empowered me to excel in the dynamic field of software development. I'm
            eager to expand my knowledge, especially in the evolving world of AI. For me, coding is a pathway to innovate and
            connect the world.{" "}
          </p>
          <div>
            <button
              onClick={() => window.scrollTo({ top: emailRef.current.offsetTop, behavior: "smooth" })}
              className="px-6 py-3 w-40 rounded-full   mr-4 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-500  hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=13yosD0joLCR-JN3Vnxm_kL5HNfDCBYhf
"
              download="Ali_Elchab_CV.pdf"
            >
              <button className="px-6 py-3 w-40 rounded-full  mr-4 bg-transparebt hover:bg-slate-800 text-white border border-white mt-3">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
