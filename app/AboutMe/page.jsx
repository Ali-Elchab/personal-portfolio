"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="space-y-3 text-base">
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <strong>Mobile:</strong> Flutter, Dart, Cubit/Bloc, GoRouter, Clean Architecture, Firebase, REST Integration, Push
            Notifications (FCM)
          </li>
          <li>
            <strong>Backend:</strong> Laravel, MySQL, REST APIs, JWT/OAuth, DB Design, Multi-role Auth Systems
          </li>
          <li>
            <strong>Tools:</strong> Git, Postman, Docker, Linux, Firebase Console
          </li>
          <li>
            <strong>Languages:</strong> PHP, Dart, JavaScript
          </li>
          <li>
            <strong>Spoken:</strong> English (fluent), Arabic (native)
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
          <strong className="break-words">Flutter Developer — Brain Solutions, Beirut (Apr 2024 – Present)</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Shipped 6 production Flutter apps end to end — ecommerce, warehouse management, CRM platform, e-book platform, and
              driver workflow apps
            </li>
            <li>
              Built checkout and payment flows covering cart logic, address management, delivery fee calculation, and payment
              validation
            </li>
            <li>
              Architected a warehouse management system with barcode scanning, live inventory syncing, and role-based access
              control
            </li>
            <li>
              Built a CRM platform with lead tracking, client portal, activity logging, and multi-role access
            </li>
            <li>
              Designed a Flutter starter skeleton with clean architecture, Cubit, and GoRouter — cut new project setup time by 60%
            </li>
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
    <section className="text-white py-8 sm:py-12 w-full">
      <div className="w-full text-left flex flex-col items-start">
        <h2 className="text-4xl font-bold text-white mb-8 sm:mb-12 text-left">About Me</h2>
        <p className="text-base lg:text-lg text-left leading-relaxed w-full">
          Flutter developer with 2+ years shipping production apps end to end. I work with clean architecture, Cubit, and
          Laravel backends — focused on building things that actually hold up when real users touch them. Canadian-Lebanese,
          based in Beirut, open to remote.
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
    </section>
  );
};

export default AboutSection;
