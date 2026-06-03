"use client";

import Image from "next/image";

const HeroSection = ({ emailRef, projectRef }) => {
  const scrollToSection = (ref) => {
    if (!ref?.current) return;

    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-0 md:min-h-screen mb-16 sm:mb-24 flex flex-col justify-start md:justify-center items-center md:items-start w-full">
      <div className="flex flex-col sm:grid sm:grid-cols-12 sm:mt-5 mb-8 lg:mt-8 gap-8 sm:gap-6 items-center sm:justify-items-stretch w-full">
        {/* Mobile image + location */}
        <div className="w-full sm:hidden flex flex-col items-center gap-3 pt-2">
          <div className="w-32 h-auto shrink-0">
            <Image
              src="/images/alichab.jpg"
              className="block w-full h-auto object-cover"
              alt="Ali Al Hadi Elchab"
              width={300}
              height={300}
              priority
            />
          </div>

          <div className="text-xs uppercase tracking-[0.16em] text-blue-200 text-center leading-relaxed">
            Canadian citizen · Beirut, Lebanon · Remote with EST overlap
          </div>
        </div>

        {/* Desktop/tablet image */}
        <div className="hidden sm:flex md:order-last sm:col-span-5 w-full items-center justify-center md:justify-end">
          <div className="w-48 sm:w-60 md:w-80 lg:w-96 h-auto mx-auto md:mx-0">
            <Image
              src="/images/alichab.jpg"
              className="block mx-auto w-full h-auto object-cover"
              alt="Ali Al Hadi Elchab"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="col-span-7 text-center sm:text-left flex flex-col gap-5 sm:gap-6 w-full items-center sm:items-start">
          <div className="hidden sm:flex text-sm uppercase tracking-[0.18em] text-blue-200 leading-relaxed">
            <span>
              Canadian citizen · Beirut, Lebanon · Remote with EST overlap
            </span>
          </div>

          <h1 className="text-white mb-0 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight w-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              Ali Al Hadi Elchab
            </span>
            <br />
            Flutter Mobile Engineer
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-1 max-w-2xl text-left leading-relaxed">
            I build production Flutter apps for business systems — from mobile
            architecture to APIs, CI/CD, and store releases.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-blue-100 justify-center sm:justify-start">
            <span className="rounded-full border border-blue-400/40 px-4 py-2">
              3+ years Flutter
            </span>
            <span className="rounded-full border border-blue-400/40 px-4 py-2">
              Canadian citizen · EST overlap
            </span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => scrollToSection(emailRef)}
              className="px-6 py-3 w-full sm:w-40 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-500 hover:opacity-90 text-white"
            >
              Contact Me
            </button>

            <a
              href="https://drive.google.com/file/d/1qyc9RKMs61pVy1hbxZgMEuCRz4ZDD6hU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-40 rounded-full bg-transparent hover:bg-slate-800 border border-white text-white text-center"
            >
              View CV
            </a>

            <button
              onClick={() => scrollToSection(projectRef)}
              className="px-6 py-3 w-full sm:w-40 rounded-full bg-transparent hover:bg-slate-800 border border-white text-white"
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
