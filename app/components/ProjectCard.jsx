import React from "react";
import Image from "next/image";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden h-64 md:h-72 lg:h-80 w-full shadow-lg bg-[#0f1117]">
      <Image
        src={imgUrl}
        alt={`${title} preview`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        priority={false}
      />

      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/10 via-black/60 to-black/80 opacity-100 transition-opacity duration-300 ease-out pointer-events-auto lg:opacity-0 lg:group-hover:opacity-100 lg:pointer-events-none lg:group-hover:pointer-events-auto">
        <div className="flex justify-end p-3">
          {gitUrl ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur hover:bg-white/20 transition"
            >
              <CodeBracketIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Repo</span>
            </Link>
          ) : (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70 backdrop-blur">
              Private
            </span>
          )}
        </div>

        <div className="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
          <h5 className="text-lg font-semibold text-white mb-2">{title}</h5>
          {description ? (
            <p className="text-sm leading-relaxed text-white/80">{description}</p>
          ) : (
            <p className="text-sm leading-relaxed text-white/60 italic">Description coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
