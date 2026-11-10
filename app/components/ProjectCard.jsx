import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { STATUS } from "../data/projects";

const pillClass =
  "inline-flex items-center rounded-full bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur hover:bg-black/80 transition whitespace-nowrap";

const ProjectCard = ({ project, cover }) => {
  const { slug, title, status, links } = project;

  return (
    <div className="relative group rounded-lg sm:rounded-xl overflow-hidden h-28 sm:h-40 lg:h-44 w-full shadow-lg bg-[#0f1117] border border-white/5">
      {cover ? (
        <Image
          src={cover}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0f1117] to-[#0f1117] flex items-center justify-center">
          <span className="text-4xl sm:text-6xl font-extrabold text-white/10 select-none">{title.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
        </div>
      )}

      <Link href={`/projects/${slug}`} className="absolute inset-0 z-0" aria-label={`${title} details`} />

      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/90">
        <div className="flex flex-wrap items-start justify-between gap-1 p-2 sm:p-2.5">
          <span className="rounded-full bg-blue-500/80 px-2 py-0.5 text-xs sm:text-[10px] font-semibold leading-tight text-white backdrop-blur">
            {STATUS[status].label}
          </span>
          <div className="hidden sm:flex flex-wrap justify-end gap-1 pointer-events-auto">
            {links.liveUrl ? (
              <Link href={links.liveUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                Live
              </Link>
            ) : null}
            {links.gitUrl ? (
              <Link href={links.gitUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                <CodeBracketIcon className="h-3 w-3 mr-1 shrink-0" />
                Repo
              </Link>
            ) : null}
            {links.playStoreUrl ? (
              <Link href={links.playStoreUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                Play
              </Link>
            ) : null}
            {links.appStoreUrl ? (
              <Link href={links.appStoreUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                App Store
              </Link>
            ) : null}
          </div>
        </div>

        <div className="p-2 sm:p-3">
          <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2 break-words">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
