/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ emailRef }) => {
  return (
    <section className="h-160 mb-24 flex flex-col justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-5 mb-8 lg:mt-8 ">
        <div class="md:order-last order-none my-4 md:mb-0 sm:col-span-5 md:justify-end flex items-center justify-center  lg:mt-0 ">
          <div class="w-52 md:w-96 h-92 flex items-center justify-end">
            <Image src="/images/alichab.png" className="w-full h-full object-cover" alt="Ali Chab" width={300} height={300} />
          </div>
        </div>
        <div className="col-span-7 place-self-end text-center sm:text-left flex flex-col  gap-8  ">
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
          <p className="text-[#ADB7BE]  sm:text-lg lg:text-xl mb-6 w-3/4 md:w-full mx-auto text-left">
            I craft intuitive websites and apps by leveraging precise programming skills and a strong IT foundation.
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
