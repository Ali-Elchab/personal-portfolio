"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../TabButton";

const roleClass = "font-semibold text-white";
const metaClass = "text-xs text-[#8a949c]";
const bulletsClass = "mt-1 list-disc space-y-1 pl-4";

const TAB_DATA = [
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className="space-y-4">
        <li>
          <p className={roleClass}>Founder · VisionRise</p>
          <p className={metaClass}>Sep 2026 – Present</p>
          <ul className={bulletsClass}>
            <li>Built and launched Appointly, a multi-tenant appointment SaaS for clinics. Live in production</li>
            <li>Built a Business Portal and two prototypes, Guestdesk and Keepboard, for on-premise use</li>
          </ul>
        </li>
        <li>
          <p className={roleClass}>Flutter Mobile Engineer · Brain Solutions</p>
          <p className={metaClass}>Apr 2024 – Present · Remote</p>
          <ul className={bulletsClass}>
            <li>Built the mobile department from zero: cleanup, Codemagic CI/CD and store releases</li>
            <li>Delivered 8 client apps end to end: warehouse, RFID gold inventory, CRM, ecommerce, e-book</li>
            <li>Designed a Flutter starter skeleton that cut project setup time by 60%, and trained a junior developer</li>
          </ul>
        </li>
        <li>
          <p className={roleClass}>IT Technician · Cosmaroma Inc</p>
          <p className={metaClass}>May 2022 – Aug 2023</p>
          <ul className={bulletsClass}>
            <li>Azure AD, Office 365, POS and branch IT support</li>
          </ul>
        </li>
        <li>
          <p className={roleClass}>IT Helpdesk · Vast</p>
          <p className={metaClass}>Aug 2020 – Apr 2022</p>
          <ul className={bulletsClass}>
            <li>Supported 200+ employees and 100+ systems, and led OS upgrades</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="space-y-2.5">
        <li>
          <strong className="text-white">Mobile:</strong> Flutter, Dart, Cubit/Bloc, GoRouter, Clean Architecture,
          Firebase, Drift/SQLite, RFID and barcode scanning
        </li>
        <li>
          <strong className="text-white">Backend:</strong> Laravel, Filament, MySQL, Sanctum, REST APIs, multi-tenant
          systems
        </li>
        <li>
          <strong className="text-white">Web and AI:</strong> React, TypeScript, OpenAI API
        </li>
        <li>
          <strong className="text-white">Delivery:</strong> Codemagic, GitHub Actions, App Store Connect, Google Play
          Console, Docker, Linux
        </li>
        <li>
          <strong className="text-white">Spoken:</strong> English (fluent), Arabic (native)
        </li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="space-y-3">
        <li>
          <p className={roleClass}>Bachelor in Computer Engineering</p>
          <p className={metaClass}>Lebanese International University · Oct 2018 – Jul 2021</p>
        </li>
        <li>
          <p className={roleClass}>Full-Stack Bootcamp · SE Factory</p>
          <p className={metaClass}>Laravel, JS, Git, APIs · Nov 2023 – Feb 2024</p>
        </li>
        <li>
          <p className={roleClass}>Flutter & Dart: The Complete Guide · Udemy</p>
          <p className={metaClass}>Jan 2024</p>
        </li>
        <li>
          <p className={roleClass}>Foundations of Computer Science · SE Factory</p>
          <p className={metaClass}>Sep 2023</p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="w-full scroll-mt-20 py-5 text-white sm:py-10">
      <h2 className="mb-2 text-lg font-bold sm:mb-4 sm:text-3xl">About me</h2>
      <p className="max-w-3xl text-sm leading-relaxed text-[#ADB7BE] md:text-base">
        Flutter engineer and founder of VisionRise. I build offline-first, multi-tenant business apps end to end, from
        the Laravel backend to the store release. At Brain Solutions I built the mobile department and delivered 8
        client apps.
      </p>
      <div className="mt-4 flex border-b border-white/10 md:max-w-md">
        {TAB_DATA.map(({ id, title }) => (
          <TabButton key={id} active={tab === id} selectTab={() => handleTabChange(id)}>
            {title}
          </TabButton>
        ))}
      </div>
      <div className="mt-4 max-w-3xl text-sm text-[#ADB7BE] md:text-base">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </section>
  );
};

export default AboutSection;
