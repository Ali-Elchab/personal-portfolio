import Link from "next/link";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";
import { getProjectImages } from "../../lib/projectImages";

const MOBILE_VISIBLE = 8;

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="w-full scroll-mt-20 py-5 sm:py-12">
      <h2 className="mb-1 text-center text-lg font-bold text-white sm:mb-3 sm:text-4xl">Selected projects</h2>
      <p className="mx-auto mb-4 max-w-2xl text-center text-xs text-[#ADB7BE] sm:mb-8 sm:text-base">
        Products at VisionRise and client apps from Brain Solutions.
      </p>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-stretch gap-2 sm:gap-4 md:grid-cols-4">
        {featured.map((project, index) => (
          <div key={project.slug} className={index >= MOBILE_VISIBLE ? "hidden md:block" : ""}>
            <ProjectCard project={project} cover={getProjectImages(project.slug).cover} />
          </div>
        ))}
      </div>
      <div className="mt-4 text-center sm:mt-8">
        <Link
          href="/projects"
          className="inline-flex h-10 items-center rounded-full border border-white px-5 text-sm text-white hover:bg-slate-800 sm:text-base"
        >
          View all {projects.length} projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
