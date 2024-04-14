import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    imgUrl: "/images/projects/launchhub-post.jpg",
    title: "Launchhub",
    description:
      "An all-in-one mobile application for startups, guiding them through hiring, marketing, legal matters, and financial management. It also connects job seekers with exciting opportunities across various startups.",
    gitUrl: "",
    previewUrl: "",
  },

  {
    id: 2,
    imgUrl: "/images/projects/netflix-project.png",
    title: "Netflix Replica",
    description:
      "This project is a collaborative effort to clone the Netflix website, focusing on a smooth user experience and responsive design. Built using React, this application demonstrates my ability to replicate complex UIs and implement functionality that mimics the real Netflix platform.",
    gitUrl: "",
    previewUrl: "",
  },

  {
    id: 3,
    imgUrl: "/images/projects/survey.jpg",
    title: "Survey Builder",
    description:
      "Survey builder website that empowers users to create customized surveys effortlessly. Leveraging the power of React for frontend development and Laravel for backend support. Users can easily craft surveys tailored to their specific needs, whether it's for market research, customer feedback, or academic purposes. ",
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
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
