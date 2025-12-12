"use client";

import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="flex flex-col p-0 md:p-3 md:my-24 my-12 gap-6">
      <h2 className="text-4xl font-bold text-white mb-2 text-center">Get in touch</h2>
      <div className="flex flex-col md:flex-row h-full p-0 md:p-8 justify-around gap-6 md:gap-8">
        <p className="text-[#ADB7BE] text-base md:text-lg w-full md:w-1/2 leading-relaxed text-center md:text-left px-4 md:px-0">
          Backend-minded engineer open to Java/Spring Boot and Laravel roles. I respond quickest by phone or email, but feel free
          to connect through any of the links below.
        </p>
        <div className="socials flex flex-col gap-4 w-full md:w-auto px-4 md:px-0">
          <div className="flex items-center gap-3 md:gap-2">
            <Link href="" className="mr-2">
              <MdLocalPhone className="w-10 h-10 md:w-12 md:h-12" />
            </Link>
            <p className="text-[#ADB7BE] text-base md:text-lg break-words">+961 71 461 762</p>
          </div>
          <div className="flex items-center gap-3 md:gap-2">
            <Link href="mailto:alielchab01@gmail.com" className="mr-2">
              <MdOutlineEmail className="w-10 h-10 md:w-12 md:h-12" />
            </Link>
            <p className="text-[#ADB7BE] text-base md:text-lg break-words">alielchab01@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 md:gap-2">
            <Link href="https://github.com/Ali-Elchab" className="mr-2">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <p className="text-[#ADB7BE] text-base md:text-lg break-words">github.com/Ali-Elchab</p>
          </div>
          <div className="flex items-center gap-3 md:gap-2">
            <Link href="https://www.linkedin.com/in/ali-elchab/">
              <Image src={LinkedInIcon} alt="Github Icon" />
            </Link>
            <p className="text-[#ADB7BE] text-base md:text-lg break-words">linkedin.com/in/ali-elchab/</p>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
