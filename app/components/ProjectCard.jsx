import React from "react";
import Image from "next/image";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const storeLinkClass =
  "inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-white backdrop-blur hover:bg-white/20 transition whitespace-nowrap";

const ProjectCard = ({ imgUrl, title, description, gitUrl, playStoreUrl, appStoreUrl, badge }) => {
  const hasLinks = gitUrl || playStoreUrl || appStoreUrl;

  return (
    <div className="relative group rounded-xl overflow-hidden h-80 w-full shadow-lg bg-[#0f1117]">
      <Image
        src={imgUrl}
        alt={`${title} preview`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        unoptimized
      />

      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/10 via-black/60 to-black/80 opacity-100 transition-opacity duration-300 ease-out pointer-events-auto lg:opacity-0 lg:group-hover:opacity-100 lg:pointer-events-none lg:group-hover:pointer-events-auto">
        <div className="flex flex-wrap justify-end gap-2 p-3">
          {gitUrl ? (
            <Link href={gitUrl} target="_blank" rel="noopener noreferrer" className={storeLinkClass}>
              <CodeBracketIcon className="h-4 w-4 mr-1 shrink-0" />
              Repo
            </Link>
          ) : null}
          {playStoreUrl ? (
            <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer" className={storeLinkClass}>
              Play Store
            </Link>
          ) : null}
          {appStoreUrl ? (
            <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer" className={storeLinkClass}>
              App Store
            </Link>
          ) : null}
          {!hasLinks ? (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70 backdrop-blur">
              {badge || "Private"}
            </span>
          ) : null}
        </div>

        <div className="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
          <h5 className="text-lg font-semibold text-white mb-2 break-words">{title}</h5>
          {description ? (
            <p className="text-sm leading-relaxed text-white/80 line-clamp-4">{description}</p>
          ) : (
            <p className="text-sm leading-relaxed text-white/60 italic">Description coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
