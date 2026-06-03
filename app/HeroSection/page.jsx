
"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ emailRef, projectRef }) => {
  return (
    <section className="min-h-0 md:min-h-screen mb-16 sm:mb-24 flex flex-col justify-start md:justify-center items-center md:items-start w-full">
      <div className="flex flex-col sm:grid sm:grid-cols-12 sm:mt-5 mb-8 lg:mt-8 gap-8 sm:gap-6 items-center sm:justify-items-stretch w-full">
        {/* Mobile layout: image above location */}
        <div className="w-full sm:hidden flex flex-col items-center gap-3 pt-2">
          <div className="w-36 h-auto shrink-0">
            <Image
              src="/images/alichab.jpg"
              className="block w-full h-auto object-cover"
              alt="Ali Chab"
              width={300}
              height={300}
            />
          </div>
          <div className="text-xs uppercase tracking-widest text-blue-200 flex flex-col items-center gap-1 text-center">
            <span>Canadian citizen based in Beirut, Lebanon</span>
            <span>Available for remote roles with EST overlap</span>
          </div>
        </div>

        {/* Desktop/tablet image */}
        <div className="hidden sm:flex md:order-last sm:col-span-5 w-full items-center justify-center md:justify-end lg:mt-0">
          <div className="w-48 sm:w-60 md:w-96 h-auto mx-auto md:mx-0">
            <Image
              src="/images/alichab.jpg"
              className="block mx-auto w-full h-auto object-cover"
              alt="Ali Chab"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="col-span-7 text-center sm:text-left flex flex-col gap-5 sm:gap-6 w-full items-center sm:items-start">
          <div className="hidden sm:flex text-sm uppercase tracking-[0.25em] text-blue-200 flex-wrap gap-3 justify-start">
            <span>Canadian citizen based in Beirut, Lebanon</span>
            <span>Available for remote roles with EST overlap</span>
          </div>
          <h1 className="text-white mb-0 sm:mb-2 text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight w-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              Ali Al Hadi Elchab
            </span>
            <br />
           <TypeAnimation
              sequence={[
                "Flutter Mobile Engineer",
                1100,
                "Full-Stack Mobile Developer",
                1100,
                "Flutter + Laravel Developer",
                1100,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4 md:w-full text-left leading-relaxed">
            I build production Flutter apps for ecommerce, CRM, POS, and ERP systems — from clean mobile architecture to Laravel APIs, CI/CD, and App Store / Play Store releases.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-blue-100 justify-center sm:justify-start">
            <span className="rounded-full border border-blue-400/40 px-4 py-2">
              3+ years Flutter
            </span>
            <span className="rounded-full border border-blue-400/40 px-4 py-2">
              App Store & Play Store releases
            </span>
            <span className="rounded-full border border-blue-400/40 px-4 py-2">
              Laravel API integration
            </span>
            <span className="rounded-full border border-blue-400/40 px-4 py-2">
              Remote-ready, EST overlap
            </span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() =>
                emailRef?.current &&
                window.scrollTo({
                  top: emailRef.current.offsetTop - 100,
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 w-full sm:w-40 rounded-full sm:mr-4 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </button>
            <a
              href="https://drive.google.com/file/d/1qyc9RKMs61pVy1hbxZgMEuCRz4ZDD6hU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-40 rounded-full sm:mr-4 bg-transparent hover:bg-slate-800 border border-white text-white text-center"
            >
              View my CV
            </a>
            <button
              onClick={() =>
                projectRef?.current &&
                window.scrollTo({
                  top: projectRef.current.offsetTop - 100,
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
