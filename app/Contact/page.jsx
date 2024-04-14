"use client";

import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="flex p-3 mt-12">
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-xl font-bold text-white my-2">Get in touch</h5>
        <p className="text-[#ADB7BE] max-w-md mb-4">
          {""}
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com/ali-elchab">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ali-elchab/">
            <Image src={LinkedInIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
