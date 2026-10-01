import ProjectCard from "../components/ProjectCard";
import { projects, STATUS, GROUP_ORDER } from "../data/projects";
import { getProjectImages } from "../lib/projectImages";

export const metadata = {
  title: "All Projects",
  description: "Flutter apps, business systems and products by Ali Elchab: store releases, WMS, CRM, POS and SaaS.",
};

const ProjectsPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto max-w-screen-xl pt-24 pb-16 px-6 sm:px-8 lg:px-10 xl:px-0 w-full">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">All Projects</h1>
        {GROUP_ORDER.map((group) => {
          const items = projects.filter((p) => STATUS[p.status].group === group);
          if (!items.length) return null;
          return (
            <section key={group} className="mb-14 max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6">{group}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {items.map((project) => (
                  <ProjectCard key={project.slug} project={project} cover={getProjectImages(project.slug).cover} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectsPage;
