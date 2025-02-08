import React from "react";
import "../styles.css"; // Ensure styles are properly linked

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and Three.js to showcase my skills, projects, and work experience.",
    techStack: "React.js, Three.js, CSS",
    image: "image/portfolio.jpg", // Replace with actual image path
    link: "#",
  },
  {
    title: "Library Management System Backend",
    description:
      "Developed a REST API for a library management system using Spring Boot with security and authentication.",
    techStack: "Java, Spring Boot, Maven, PostgreSQL, JWT, REST API",
    image: "image/library.jpg", // Replace with actual image path
    link: "#",
  },
  {
    title: "E-commerce Backend API",
    description:
      "Developed a secure REST API for an e-commerce platform using Python and Flask with JWT authentication.",
    techStack: "Python, Flask, JWT, PostgreSQL",
    image: "image/ecommerce.jpg", // Replace with actual image path
    link: "#",
  },
];

export default function Projects3D() {
  return (
    <section className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-inner">
              {/* Front side */}
              <div className="project-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <a href={project.link} className="project-link">
                  View Project
                </a>
              </div>

              {/* Back side (Flipping Effect) */}
              <div className="project-card-back">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
