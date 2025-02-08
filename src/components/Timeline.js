import React from "react";
import "../styles.css"; // Ensure the correct path to styles.css

const experiences = [
  {
    title: "Instructional Assistant",
    company: "Rivier University",
    duration: "June 2023 - Sep 2023",
    details: [
      "Assisted Professors and students by resolving Python and SQL issues for quality and data improvements.",
      "Developed Tableau and POWERBI Dashboards for analysis of student data across colleges in Rivier University.",
      "Conducted workshops on Python programming and data analysis techniques, improving students' understanding of practical applications and increasing overall class engagement by 20%.",
    ],
    logo: "image/Ri.jpg", // Replace with actual logo URL
  },
  {
    title: "Software Engineer",
    company: "DELL",
    duration: "Sep 2020 - Dec 2022",
    details: [
      "Developed production-quality software frameworks using Python and Java, building REST APIs that improved system communication and data exchange between Dell’s CRM, sales, and support systems, resulting in a 30% increase in cross-functional collaboration.",
      "Enhanced API reliability by implementing robust error-handling mechanisms and ensuring scalability.",
      "Collaborated effectively with cross-functional teams in an Agile environment to define requirements and ship high-performance solutions, contributing to a 40% reduction in processing time across key CRM functions.",
      "Implemented concurrency mechanisms for real-time data processing, improving system uptime to 99.9% and maintaining reliability under high load.",
      "Optimized software performance through detailed profiling and analysis, reducing data latency by 20% and significantly improving system responsiveness.",
      "Designed and built secure APIs using OAuth 2.0 and JWT, reducing security incidents by 75% in Dell's CRM system.",
      "Led the creation of automated tests integrated into the CI/CD pipeline using Gradle and Bamboo, reducing deployment errors by 25%.",
    ],
    logo: "image/Dell.jpg", // Replace with actual logo URL
  },
  {
    title: "Software Engineering Intern",
    company: "SriniInfotech",
    duration: "May 2019 - July 2019",
    details: [
      "Collaborated with the development team to design and implement a web-based application using Java and Spring Boot, reducing code maintenance efforts by 30% through a modular architecture.",
      "Conducted research on GraphQL and Docker, identifying potential performance gains of up to 25% for future projects.",
      "Developed and integrated RESTful APIs, facilitating seamless communication between client and server and improving data retrieval efficiency by 25%.",
    ],
    logo: "image/SI.jpg", // Replace with actual logo URL
  },
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <h2 className="section-title">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-icon">
            <img src={exp.logo} alt="Company Logo" className="company-logo" />
          </div>
          <div className="timeline-content">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
