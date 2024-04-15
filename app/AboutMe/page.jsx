"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2 ml-2 ">
        <li className="mb-4">
          <strong>Programming (and Scripting) Languages:</strong> C#, Python, JavaScript, PHP, SQL, Dart, Java, TypeScript
        </li>
        <li className="mb-4">
          <strong>Database Management Systems:</strong> MySQL, MongoDB
        </li>
        <li className="mb-4">
          <strong>Frameworks, Libraries and Run-time Environments:</strong> DotNet, Laravel, React, Flutter, Angular, Node.js,
          Express, Electron.js
        </li>
        <li className="mb-4">
          <strong>Version Control, Cloud Services and Tools:</strong> Git, GitHub, AWS, Firebase, Figma
        </li>
        <li className="mb-4">
          <strong>Theory:</strong> Complexity Analysis, Data Structures and Algorithms, Design Patterns, OOP
        </li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li>
          {" "}
          <strong>Bachelors Degree in Computer Engineering – Lebanese International University (October 2018 – July 2021)</strong>
        </li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li className="mb-4">
          <strong>Full Stack Web Development Bootcamp – SE Factory, Beirut Governorate, Lebanon (Oct 2023 - Jan 2024)</strong>
          <ul className="list-disc pl-2 ml-8">
            <li>
              Intensive 12-week hybrid program focusing on full stack web development using HTML, CSS, JavaScript, React.js, PHP,
              Laravel, Node.js, Express, and MySQL.
            </li>
            <li>Participated in hands-on workshops, completed projects, and tackled assignments to hone technical skills.</li>
            <li>Utilized GitHub for version control, Postman for API testing, and Figma for wireframing and mockups.</li>
            <li>Developed soft skills such as management and collaboration through workshops and team projects.</li>
            <li>Implemented collaborative development practices on GitHub and successfully completed several projects.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>IT Technician – Cosmaroma Inc, Toronto, ON (May 2022 – Aug 2023)</strong>
          <ul className="list-disc pl-2 ml-8">
            <li>
              Headed IT department operations encompassing Office 365, Wi-Fi infrastructure, and Microsoft Azure AD. Collaborated
              across departments, supported accounting functions with QuickBooks and addressed stakeholder queries.
            </li>
            <li>
              Managed system administration, ensured seamless POS operations, maintained LAN assets, conducted repairs, and
              delivered 2nd level tech support.
            </li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>IT Helpdesk – Vast, Beirut, Lebanon (Aug 2020 – April 2022)</strong>
          <ul className="list-disc pl-2 ml-8">
            <li>
              Oversaw the seamless operation of 100+ Windows systems, spearheaded upgrades, and ensured optimal performance for
              200+ employees, driving a 10% boost in efficiency through a comprehensive building-wide OS upgrade.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li className="mb-4">
          <strong>Full-Stack Web Development Bootcamp – SE Factory, Lebanon (October 2023 – January 2024)</strong>
          <ul className="list-disc pl-2 ml-8">
            <li>
              Completed an intensive 12-week program covering cloud architecture, front-end and back-end development, source
              control, and web application security.
            </li>
            <li>Engaged in lectures, workshops, and projects to develop comprehensive full-stack development skills.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Foundations of Computer Science Course – SE Factory, Lebanon (July 2023 – September 2023)</strong>
          <ul className="list-disc pl-2 ml-8">
            <li>
              Covered control flow, data structures, complexity analysis, and algorithms using Python over 9 weeks in a part-time
              format.
            </li>
            <li>Participated in lectures, workshops, and projects focusing on core computer science concepts.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>The Web Developer Bootcamp – Udemy (July 2023 – September 2023)</strong>
          <ul className="list-disc pl-2 ml-8">
            <li>Completed over 70 hours of training from HTML5 to Node.js, React.js, and more, through online learning.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Flutter And Dart - The Complete Guide – Udemy (January 2024)</strong>
          <ul className="list-disc pl-2 ml-8">
            <li>Explored the Flutter SDK & Dart; learned to build native iOS and Android apps through the Flutter Framework.</li>
          </ul>
        </li>
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
      <div className="md:grid md:grid-cols-5  gap-8 items-center py-8  xl:gap-16 sm:py-16 my-8">
        <div class="hidden md:block place-self-start md:col-span-2">
          <div class="w-full   flex items-center justify-end ">
            <Image src="/images/about-image.png" className="w-full  object-fill" width={400} height={500} alt="PC Setup" />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:col-span-3">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a passionate software developer with three years of IT experience, skilled in creating intuitive web and mobile
            applications. My technical background has empowered me to excel in the dynamic field of software development. I'm
            eager to expand my knowledge, especially in the evolving world of AI. For me, coding is a pathway to innovate and
            connect the world.
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
