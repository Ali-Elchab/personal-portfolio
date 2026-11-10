import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { projects, getProject, STATUS } from "../../data/projects";
import { getProjectImages } from "../../lib/projectImages";

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export const generateMetadata = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) return {};
  const { cover } = getProjectImages(project.slug);
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: cover ? [cover] : undefined },
  };
};

const linkClass =
  "inline-flex h-10 items-center rounded-full border border-white px-4 text-sm text-white transition hover:bg-slate-800";

const ProjectDetail = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { title, tagline, status, overview, role, highlights, stack, links, platform, caseStudy, metrics } = project;
  const { cover, screens } = getProjectImages(project.slug);
  const isPhone = platform === "phone";

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto max-w-4xl pt-16 pb-10 px-4 sm:pt-24 sm:pb-20 sm:px-8 w-full text-white">
        <Link href="/#projects" className="flex w-fit items-center gap-2 text-sm text-[#ADB7BE] hover:text-white mb-4 sm:mb-8">
          <ArrowLeftIcon className="h-4 w-4" />
          All projects
        </Link>

        <span className="inline-block rounded-full bg-blue-500/80 px-2.5 py-0.5 text-xs font-semibold">{STATUS[status].label}</span>
        <h1 className="mt-2 text-2xl sm:mt-4 sm:text-5xl font-extrabold break-words">{title}</h1>
        <p className="mt-1 text-sm sm:mt-2 sm:text-lg text-[#ADB7BE]">{tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
          {links.appStoreUrl ? (
            <Link href={links.appStoreUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              App Store
            </Link>
          ) : null}
          {links.playStoreUrl ? (
            <Link href={links.playStoreUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Google Play
            </Link>
          ) : null}
          {links.liveUrl ? (
            <Link href={links.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Live app
            </Link>
          ) : null}
          {links.gitUrl ? (
            <Link href={links.gitUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <CodeBracketIcon className="h-4 w-4 mr-1.5" />
              Source code
            </Link>
          ) : null}
        </div>

        {cover ? (
          <div className="relative mt-5 h-40 sm:mt-10 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl border border-white/5 bg-white/5">
            <Image
              src={cover}
              alt={`${title} cover`}
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-contain"
            />
          </div>
        ) : null}

        <section className="mt-5 sm:mt-10">
          <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">Overview</h2>
          <p className="text-sm sm:text-base text-[#ADB7BE] leading-relaxed">{overview}</p>
          {role ? (
            <p className="mt-3 text-sm text-[#ADB7BE]">
              <span className="text-white font-semibold">Role:</span> {role}
            </p>
          ) : null}
        </section>

        {metrics?.length ? (
          <section className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <p className="text-2xl font-bold text-white">{m.value}</p>
                <p className="text-sm text-[#ADB7BE]">{m.label}</p>
              </div>
            ))}
          </section>
        ) : null}

        {caseStudy ? (
          <section className="mt-5 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">The challenge</h2>
              <p className="text-sm sm:text-base text-[#ADB7BE] leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">How I approached it</h2>
              <p className="text-sm sm:text-base text-[#ADB7BE] leading-relaxed">{caseStudy.approach}</p>
            </div>
          </section>
        ) : null}

        <section className="mt-5 sm:mt-10">
          <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">What it does</h2>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-[#ADB7BE] leading-relaxed">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        <section className="mt-5 sm:mt-10">
          <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-blue-400/40 px-2.5 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm text-blue-100">
                {s}
              </span>
            ))}
          </div>
        </section>

        {screens.length ? (
          <section className="mt-5 sm:mt-10">
            <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">Screenshots</h2>
            <div
              className={
                isPhone
                  ? "flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-3"
                  : "grid grid-cols-2 gap-2 sm:gap-4"
              }
            >
              {screens.map((src, i) => (
                <div
                  key={src}
                  className={
                    isPhone
                      ? "relative shrink-0 snap-start w-36 sm:w-64 aspect-[9/19.5] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      : "relative h-28 sm:h-72 overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  }
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    fill
                    sizes={isPhone ? "256px" : "(min-width: 640px) 448px, 50vw"}
                    className={isPhone ? "object-cover object-center" : "object-contain"}
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {status === "development" || status === "built" ? (
          <p className="mt-6 sm:mt-12 rounded-lg border border-white/10 bg-white/5 p-3 text-xs sm:p-4 sm:text-sm text-[#ADB7BE]">
            This product is not publicly released yet. I&apos;m happy to walk through it on a call.
          </p>
        ) : null}

        {status === "prototype" ? (
          <p className="mt-6 sm:mt-12 rounded-lg border border-white/10 bg-white/5 p-3 text-xs sm:p-4 sm:text-sm text-[#ADB7BE]">
            This is a working prototype built for a prospective client. The screenshots use demo data only, and it is not
            released. I&apos;m happy to walk through it on a call.
          </p>
        ) : null}

        {status === "internal" ? (
          <p className="mt-6 sm:mt-12 rounded-lg border border-white/10 bg-white/5 p-3 text-xs sm:p-4 sm:text-sm text-[#ADB7BE]">
            This system is private to the company that uses it, so there are no public links or real data here. I&apos;m
            happy to walk through it on a call.
          </p>
        ) : null}
      </div>
    </main>
  );
};

export default ProjectDetail;
