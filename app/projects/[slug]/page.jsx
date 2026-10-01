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
  "inline-flex items-center rounded-full border border-white px-5 py-2.5 text-white hover:bg-slate-800 transition";

const ProjectDetail = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { title, tagline, status, overview, role, highlights, stack, links, platform, caseStudy, metrics } = project;
  const { cover, screens } = getProjectImages(project.slug);
  const isPhone = platform === "phone";

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto max-w-4xl pt-24 pb-20 px-6 sm:px-8 w-full text-white">
        <Link href="/#projects" className="flex w-fit items-center gap-2 text-[#ADB7BE] hover:text-white mb-8">
          <ArrowLeftIcon className="h-4 w-4" />
          All projects
        </Link>

        <span className="inline-block rounded-full bg-blue-500/80 px-3 py-1 text-xs font-semibold">{STATUS[status].label}</span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold break-words">{title}</h1>
        <p className="mt-2 text-lg text-[#ADB7BE]">{tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
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
              <CodeBracketIcon className="h-4 w-4 mr-2" />
              Source code
            </Link>
          ) : null}
        </div>

        {cover ? (
          <div className="relative mt-10 h-56 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl border border-white/5 bg-white/5">
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

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-[#ADB7BE] leading-relaxed">{overview}</p>
          {role ? (
            <p className="mt-4 text-sm text-[#ADB7BE]">
              <span className="text-white font-semibold">Role:</span> {role}
            </p>
          ) : null}
        </section>

        {metrics?.length ? (
          <section className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">{m.value}</p>
                <p className="text-sm text-[#ADB7BE]">{m.label}</p>
              </div>
            ))}
          </section>
        ) : null}

        {caseStudy ? (
          <section className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-3">The challenge</h2>
              <p className="text-[#ADB7BE] leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">How I approached it</h2>
              <p className="text-[#ADB7BE] leading-relaxed">{caseStudy.approach}</p>
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">What it does</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#ADB7BE] leading-relaxed">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-blue-400/40 px-3 py-1 text-sm text-blue-100">
                {s}
              </span>
            ))}
          </div>
        </section>

        {screens.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
            <div
              className={
                isPhone
                  ? "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-4"
              }
            >
              {screens.map((src, i) => (
                <div
                  key={src}
                  className={
                    isPhone
                      ? "relative shrink-0 snap-start w-56 sm:w-64 aspect-[9/19.5] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      : "relative h-56 sm:h-72 overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  }
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    fill
                    sizes={isPhone ? "256px" : "(min-width: 640px) 448px, 100vw"}
                    className={isPhone ? "object-cover object-center" : "object-contain"}
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {status === "internal" ? (
          <p className="mt-12 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-[#ADB7BE]">
            This system is private to the company that uses it, so there are no public links or real data here. I&apos;m
            happy to walk through it on a call.
          </p>
        ) : null}
      </div>
    </main>
  );
};

export default ProjectDetail;
