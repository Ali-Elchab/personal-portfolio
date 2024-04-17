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
    imgUrl: "/images/projects/portfolio.png",
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js, displaying my software development skills and projects. Optimized for responsiveness with Tailwind CSS, it highlights my technical prowess and modern web solutions. Hosted on Vercel, it welcomes collaborators to explore my work and connect.",
    gitUrl: "https://github.com/Ali-Elchab/portfolio-website",
    previewUrl: "",
  },
  {
    id: 3,
    imgUrl: "/images/projects/Group1.png",
    title: "Netflix Replica",
    description:
      "This project is a collaborative effort to clone the Netflix website, focusing on a smooth user experience and responsive design. Built using React, this application demonstrates my ability to replicate complex UIs and implement functionality that mimics the real Netflix platform.",
    gitUrl: "https://github.com/Ali-Elchab/netflix-replica",
    previewUrl: "",
  },

  {
    id: 4,
    imgUrl: "/images/projects/survey.png",
    title: "Survey Builder",
    description:
      "Survey builder website that empowers users to create customized surveys effortlessly. Leveraging the power of React for frontend development and NodeJs for backend support. Users can craft surveys tailored to their needs, whether it's for market research, customer feedback, or academic purposes. ",
    gitUrl: "https://github.com/Ali-Elchab/survey-builder",
    previewUrl: "",
  },
  {
    id: 5,
    imgUrl: "/images/projects/BankingSystem.png",
    title: "Banking System",
    description:
      "Simple banking system developed using .NET WinForms and C# programming language with Entity Framework for database operations. The backend database management system used for this project is SQL Server.",
    gitUrl: "https://github.com/Ali-Elchab/BankingSystem",
  },
  {
    id: 6,
    imgUrl: "/images/projects/simon-says.jpg",
    title: "Simon Says Game",
    description:
      "Simon Says game developed using raw HTML, CSS, and JavaScript. Simon Says is a memory skill game that challenges players to follow an increasingly complex series of lights and sounds.",
    gitUrl: "https://github.com/Ali-Elchab/SimonSays",
  },
];

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-16">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-8">
        {projectsData.map((project) => (
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
