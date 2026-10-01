import Link from "next/link";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";
import { getProjectImages } from "../../lib/projectImages";

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-16 w-full">
      <h2 className="text-4xl font-bold text-white mb-3 text-center w-full">Selected Projects</h2>
      <p className="text-[#ADB7BE] text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
        Apps live on the App Store and Google Play, private business systems in daily use, and products I own and build myself.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto items-stretch">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} cover={getProjectImages(project.slug).cover} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 rounded-full border border-white text-white hover:bg-slate-800"
        >
          View all {projects.length} projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
