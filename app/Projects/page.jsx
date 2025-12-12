import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    imgUrl: "/images/projects/flutter-skeleton.jpg",
    title: "Flutter Starter Skeleton",
    description:
      "A production-ready Flutter starter kit designed for scalable apps with clean architecture, Riverpod state management, Drift local persistence, and GoRouter navigation. Flexible enough for any type of app (e-commerce, SaaS, or internal tools).",
    gitUrl: "https://github.com/Ali-Elchab/launchHub",
    previewUrl: "",
  },
  {
    id: 2,
    imgUrl: "/images/projects/freshzone.jpg",
    title: "FreshZone",
    description:
      "A Flutter-based e-commerce application for a supermarket, featuring category-based browsing, product search, cart management, promo handling, and a smooth checkout flow. Built with clean architecture and REST APIs to support real production usage.",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    imgUrl: "/images/projects/wms.jpg",
    title: "WMS",
    description:
      "A warehouse management system built with Flutter to handle product stock, item movements, and inventory operations. It supports multi-warehouse flows, stock adjustments, and integration with a backend for real-time data consistency.",
    gitUrl: "https://github.com/Ali-Elchab/launchHub",
    previewUrl: "",
  },
  {
    id: 5,
    imgUrl: "/images/projects/launchhub-post.jpg",
    title: "Launchhub",
    description:
      "An all-in-one mobile application for startups, guiding them through hiring, marketing, legal matters, and financial management. It also connects job seekers with exciting opportunities across various startups.",
    gitUrl: "https://github.com/Ali-Elchab/launchHub",
    previewUrl: "",
  },
  {
    id: 6,
    imgUrl: "/images/projects/bookly.png",
    title: "Bookly App",
    description:
      "A Flutter application that fetches the Google Books API to display programming-related books. It showcases Bloc and Cubit for state management and applies MVVM best practices for clean and maintainable code.",
    gitUrl: "https://github.com/Ali-Elchab/bookly_app",
  },
  {
    id: 7,
    imgUrl: "/images/projects/Group1.png",
    title: "Netflix Replica",
    description:
      "A collaborative project cloning the Netflix UI, focusing on smooth UX and responsive design. Built using React, it demonstrates the ability to replicate complex layouts and user flows found in real-world streaming platforms.",
    gitUrl: "https://github.com/Ali-Elchab/netflix-replica",
    previewUrl: "",
  },
 
  
];

const ProjectSection = () => {
  const sortedProjects = [...projectsData].sort((a, b) => a.id - b.id);

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6">
      <h2 className="text-4xl font-bold text-white mb-12 sm:mb-16 text-center w-full">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
