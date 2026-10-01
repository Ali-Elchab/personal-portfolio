import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { STATUS } from "../data/projects";

const pillClass =
  "inline-flex items-center rounded-full bg-black/60 px-3 py-2 text-xs text-white backdrop-blur hover:bg-black/80 transition whitespace-nowrap";

const ProjectCard = ({ project, cover }) => {
  const { slug, title, summary, status, links } = project;

  return (
    <div className="relative group rounded-xl overflow-hidden h-80 w-full shadow-lg bg-[#0f1117] border border-white/5">
      {cover ? (
        <Image
          src={cover}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0f1117] to-[#0f1117] flex items-center justify-center">
          <span className="text-7xl font-extrabold text-white/10 select-none">{title.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
        </div>
      )}

      <Link href={`/projects/${slug}`} className="absolute inset-0 z-0" aria-label={`${title} details`} />

      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/90">
        <div className="flex flex-wrap items-start justify-between gap-2 p-3">
          <span className="rounded-full bg-blue-500/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {STATUS[status].label}
          </span>
          <div className="flex flex-wrap justify-end gap-2 pointer-events-auto">
            {links.liveUrl ? (
              <Link href={links.liveUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                Live app
              </Link>
            ) : null}
            {links.gitUrl ? (
              <Link href={links.gitUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                <CodeBracketIcon className="h-4 w-4 mr-1 shrink-0" />
                Repo
              </Link>
            ) : null}
            {links.playStoreUrl ? (
              <Link href={links.playStoreUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                Play Store
              </Link>
            ) : null}
            {links.appStoreUrl ? (
              <Link href={links.appStoreUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
                App Store
              </Link>
            ) : null}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-1 break-words">{title}</h3>
          <p className="text-sm leading-relaxed text-white/80 line-clamp-2">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
