"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors Degree in Computer Engineering</li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>SE Factory, Beirut, Lebanon</li>
        <li>Cosmaroma, Toronto, Canada</li>
        <li>Vast, Beirut, Lebanon</li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>FCS</li>
        <li>Full Stack Web Development course</li>
        <li>Flutter Course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 ">
        <Image src="/images/about-image.png" width={500} height={500} alt="PC Setup" className="rounded" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis velit quas facere rem consequatur
            incidunt reiciendis omnis. Ullam quia non iste odio in vitae, distinctio maiores nulla quos. Quod.
          </p>
          <div className=" flex flex-row mt-8">
            <TabButton active={tab === "skills"} selectTab={() => handleTabChange("skills")}>
              Skills
            </TabButton>
            <TabButton active={tab === "experience"} selectTab={() => handleTabChange("experience")}>
              Experience
            </TabButton>
            <TabButton active={tab === "education"} selectTab={() => handleTabChange("education")}>
              Education
            </TabButton>
            <TabButton active={tab === "certifications"} selectTab={() => handleTabChange("certifications")}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8"> {TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
