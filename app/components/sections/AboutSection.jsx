"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="space-y-3 text-base">
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <strong>Mobile:</strong> Flutter, Dart, Cubit/Bloc, GoRouter, GetIt, Dio,
            Clean Architecture, Firebase (Auth, FCM), Offline storage and sync
            (Drift/SQLite), Barcode and RFID scanning, In-app purchases and
            Stripe, Flutter Web
          </li>
          <li>
            <strong>Backend:</strong> Laravel, Filament, MySQL, Sanctum, OAuth, REST
            APIs, DB Design, Multi-tenant and multi-role systems
          </li>
          <li>
            <strong>Web and AI:</strong> React, TypeScript, OpenAI API
          </li>
          <li>
            <strong>Delivery:</strong> Codemagic, GitHub Actions, App Store Connect,
            Google Play Console, Git, Docker, Linux, Cloudflare, Sentry, Postman
          </li>
          <li>
            <strong>Languages:</strong> Dart, PHP, JavaScript, TypeScript, SQL
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
          <strong>Bachelor in Computer Engineering</strong> — Lebanese
          International University, Lebanon (Oct 2018 – Jul 2021)
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
          <strong className="break-words">
            Founder — VisionRise (Sep 2026 – Present)
          </strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Founded a software company that builds ready-to-use SaaS for small
              businesses, with setup, team training and support included
            </li>
            <li>
              Built and launched Appointly, a multi-tenant appointment SaaS for
              clinics with a Flutter staff app, a React clinic website and
              patient portal, and an AI assistant. Live in production
            </li>
            <li>
              Built the VisionRise Portal, a multi-tenant management portal with
              quotations, CRM, to-dos, reports and subscriptions, and the
              company website
            </li>
          </ul>
        </li>
        <li className="space-y-2">
          <strong className="break-words">
            Flutter Mobile Engineer — Brain Solutions, Beirut (Apr 2024 – Present)
          </strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Built the mobile department from zero: legacy cleanup, a skeleton
              app that unified the codebases, dependency upgrades, Codemagic
              CI/CD, App Store and Google Play releases, client servers and
              Firebase
            </li>
            <li>
              Delivered 8 client apps: warehouse management (Brain WMS, resold
              to multiple companies, and Civissol), RFID gold inventory (Brain
              Gold), CRM (Excellence Quality), ecommerce (FreshZone, Brain
              Stores, Sweet Deals) and part of an Arabic e-book platform
            </li>
            <li>
              Own each client end to end except pricing: customer conversations,
              backend, app, store release, and ideas for business and marketing
            </li>
            <li>
              Designed a Flutter starter skeleton with clean architecture,
              Cubit, and GoRouter — cut new project setup time by 60%
            </li>
            <li>
              Trained a junior developer who built and delivered his own app
            </li>
          </ul>
        </li>
        <li className="space-y-2">
          <strong>
            IT Technician — Cosmaroma Inc, Toronto (May 2022 – Aug 2023)
          </strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Managed IT for a multi-branch retail company: Azure AD, Office
              365, POS systems, endpoints, printers, networking and user support.
            </li>
          </ul>
        </li>
        <li className="space-y-2">
          <strong>IT Helpdesk — Vast, Beirut (Aug 2020 – Apr 2022)</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Supported 200+ employees across 100+ Windows and Linux systems,
              led OS upgrades, and managed the network and device lifecycle.
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
      <ul className="list-disc pl-2 ml-2 space-y-3">
        <li>
          <strong>Flutter & Dart – Complete Guide (Udemy), Jan 2024</strong>
        </li>
        <li>
          <strong>SE Factory Full-Stack Bootcamp, Nov 2023 – Feb 2024</strong> — Laravel, JS,
          Git, APIs; final project in Flutter
        </li>
        <li>
          <strong>CS Foundations – SE Factory, Sep 2023</strong> — Python, data
          structures, algorithms
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
    <section id="about" className="scroll-mt-24 text-white py-8 sm:py-12 w-full">
      <div className="w-full text-left flex flex-col items-start">
        <h2 className="text-4xl font-bold text-white mb-8 sm:mb-12 text-left">
          About Me
        </h2>
        <p className="text-base lg:text-lg text-left leading-relaxed w-full">
          Flutter mobile engineer and founder of VisionRise. I build and ship
          offline-first, multi-tenant business apps end to end: Flutter apps,
          Laravel backends and App Store / Google Play releases. At Brain
          Solutions I built the mobile department from zero and delivered 8
          client apps. At VisionRise I built Appointly, a live SaaS for clinics.
          Canadian citizen, relocating to Toronto in March 2027, open to remote
          roles with EST overlap.
        </p>
        <div className="flex flex-row mt-8 flex-wrap gap-3">
          <TabButton
            active={tab === "skills"}
            selectTab={() => handleTabChange("skills")}
          >
            Skills
          </TabButton>
          <TabButton
            active={tab === "experience"}
            selectTab={() => handleTabChange("experience")}
          >
            Experience
          </TabButton>
          <TabButton
            active={tab === "education"}
            selectTab={() => handleTabChange("education")}
          >
            Education
          </TabButton>
          <TabButton
            active={tab === "certifications"}
            selectTab={() => handleTabChange("certifications")}
          >
            Certifications
          </TabButton>
        </div>
        <div className="mt-8">
          {" "}
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;