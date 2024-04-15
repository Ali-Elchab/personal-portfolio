import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    imgUrl: "/images/projects/launchhub-post.jpg",
    title: "Launchhub",
    description:
      "An all-in-one mobile application for startups, guiding them through hiring, marketing, legal matters, and financial management. It also connects job seekers with exciting opportunities across various startups.",
    gitUrl: "https://github.com/Ali-Elchab/launchHub",
    previewUrl: "",
  },

  {
    id: 2,
    imgUrl: "/images/projects/netflix-project.png",
    title: "Netflix Replica",
    description:
      "This project is a collaborative effort to clone the Netflix website, focusing on a smooth user experience and responsive design. Built using React, this application demonstrates my ability to replicate complex UIs and implement functionality that mimics the real Netflix platform.",
    gitUrl: "https://github.com/Ali-Elchab/netflix-replica",
    previewUrl: "",
  },

  {
    id: 3,
    imgUrl: "/images/projects/survey.jpg",
    title: "Survey Builder",
    description:
      "Survey builder website that empowers users to create customized surveys effortlessly. Leveraging the power of React for frontend development and Laravel for backend support. Users can craft surveys tailored to their needs, whether it's for market research, customer feedback, or academic purposes. ",
    gitUrl: "https://github.com/Ali-Elchab/survey-builder",
    previewUrl: "",
  },
];

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-16">My Projects</h2>
      <div class="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
