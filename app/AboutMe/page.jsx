"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="space-y-3 text-base">
        <p>
          Backend-first approach: I care about clean DB schemas, predictable APIs, and reliable auth. Currently leaning into
          Java/Spring Boot after shipping Laravel products.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <strong>Backend:</strong> REST APIs, SQL/MySQL, DB design, JWT/OAuth, caching concepts, queues
          </li>
          <li>
            <strong>Languages:</strong> PHP, Java, Dart, JavaScript, C#
          </li>
          <li>
            <strong>Frameworks:</strong> Laravel, Flutter, Next.js, Spring (foundational)
          </li>
          <li>
            <strong>Tools:</strong> Git, Firebase, Postman, Docker (basic), Linux
          </li>
          <li>
            <strong>Languages spoken:</strong> English (fluent), Arabic (native)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2 ml-2 space-y-2">
        <li>
          <strong>Bachelor in Computer Engineering</strong> — Lebanese International University, Lebanon (Oct 2018 – Jul 2021)
        </li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className="list-disc pl-2 ml-2 space-y-4">
        <li className="space-y-2">
          <strong>Full-Stack Developer — Brain Stores, Beirut (Apr 2024 – Present)</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Designed REST API endpoints with validation, SQL queries, and MySQL schema optimizations.</li>
            <li>Built ecommerce flows: checkout, cart, addresses, and product filtering logic.</li>
            <li>Integrated auth with tokens and Google Sign-In; maintained Flutter app (clean architecture, Cubit, GoRouter).</li>
          </ul>
        </li>
        <li className="space-y-2">
          <strong>IT Technician — Cosmaroma Inc, Toronto (May 2022 – Aug 2023)</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Managed Azure AD, Office 365, servers, POS, and Windows/Linux environments.</li>
          </ul>
        </li>
        <li className="space-y-2">
          <strong>IT Helpdesk — Vast, Beirut (Aug 2020 – Apr 2022)</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Handled 100+ Windows/Linux systems, led OS upgrades, and improved operations for 200+ staff.</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="list-disc pl-2 ml-2 space-y-3">
        <li>
          <strong>Flutter & Dart – Complete Guide (Udemy), 2024</strong>
        </li>
        <li>
          <strong>SE Factory Full-Stack Bootcamp, 2024</strong> — Laravel, JS, Git, APIs; final project in Flutter
        </li>
        <li>
          <strong>CS Foundations – SE Factory, 2023</strong> — Python, data structures, algorithms
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-5  gap-8 items-center py-8  xl:gap-16 sm:py-16 my-8">
        <div className="hidden md:block place-self-start md:col-span-2">
          <div className="w-full flex items-center justify-end">
            <Image
              src="/images/about-image.png"
              className="w-full object-fill rounded-xl"
              width={400}
              height={500}
              alt="PC Setup"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:col-span-3">
          <h2 className="text-4xl font-bold text-white mb-4 text-center md:text-left">About Me</h2>
          <p className="text-base lg:text-lg text-justify leading-relaxed">
            Software engineer focused on backend fundamentals and scalable logic. My IT roots keep me systems-minded, and my
            current focus is moving deeper into Java and Spring Boot while still delivering Laravel and Flutter products end to
            end.
          </p>
          <div className="flex flex-row mt-8 flex-wrap gap-3">
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
