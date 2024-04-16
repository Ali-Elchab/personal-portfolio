"use client";

import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="flex flex-col p-3 my-24 h-96">
      <h2 className="text-4xl font-bold text-white mb-4  text-center">Get in touch</h2>
      <div className="flex flex-col md:flex-row h-full p-8 justify-around">
        <p className="text-[#ADB7BE] text-lg w-full md:w-1/2">
          {""}
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Link href="" className="mr-2">
              <MdLocalPhone className="w-12 h-12" />
            </Link>
            <p className="text-[#ADB7BE] text-lg ">+961 71 461 762</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="" className="mr-2">
              <MdOutlineEmail className="w-12 h-12" />
            </Link>
            <p className="text-[#ADB7BE] text-lg ">alielchab01@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/Ali-Elchab" className="mr-2">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <p className="text-[#ADB7BE] text-lg ">github.com/Ali-Elchab</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://www.linkedin.com/in/ali-elchab/">
              <Image src={LinkedInIcon} alt="Github Icon" />
            </Link>
            <p className="text-[#ADB7BE] text-lg ">linkedin.com/in/ali-elchab/</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
