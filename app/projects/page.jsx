import ProjectCard from "../components/ProjectCard";
import { projects, STATUS, GROUP_ORDER } from "../data/projects";
import { getProjectImages } from "../lib/projectImages";

export const metadata = {
  title: "All Projects",
  description: "Flutter apps, business systems and SaaS products by Ali Elchab: Appointly, DSR, Guestdesk, Keepboard, a business management portal, and client apps for warehouse, CRM and ecommerce.",
};

const ProjectsPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto max-w-6xl pt-16 pb-10 px-4 sm:px-8 lg:px-10 xl:px-0 w-full">
        <h1 className="text-xl sm:text-4xl font-bold text-white mb-4 sm:mb-10 text-center">All Projects</h1>
        {GROUP_ORDER.map((group) => {
          const items = projects.filter((p) => STATUS[p.status].group === group);
          if (!items.length) return null;
          return (
            <section key={group} className="mb-6 sm:mb-10 max-w-6xl mx-auto">
              <h2 className="text-base sm:text-2xl font-semibold text-white mb-2 sm:mb-4">{group}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 items-stretch">
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
