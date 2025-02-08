import React from "react";
import ThreeDScene from "./components/ThreeDScene";
import Projects3D from "./components/Projects3D";
import SkillsCube from "./components/SkillsCube";
import Timeline from "./components/Timeline";
import "./styles.css";

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

function App() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("work")}>Work</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aravindmodala"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-logo"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                alt="LinkedIn"
                className="linkedin-icon"
              />
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="intro-container">
          {/* Left Side: Text Summary */}
          <div className="intro-text">
            <h1>Hi, I'm Aravind Modala</h1>
            <h2>Software Engineer & UI Developer</h2>
            <p>
              Passionate about building scalable backend systems and designing
              user-friendly, visually appealing interfaces. With expertise in
              tools like React.js, Three.js, and cloud platforms like AWS and
              Azure, I transform ideas into functional and beautiful solutions
              that make a difference.
            </p>
          </div>

          {/* Right Side: Profile Image */}
          <div>
            <img
              src="image/image.jpg"
              alt="Profile Picture"
              className="profile-image-large"
            />
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <SkillsCube />
        <ul className="skills-list">
          <li>
            <strong>Programming:</strong> C#, Java, GO, MySQL, PostgreSQL,
            NoSQL, Python, JavaScript, React.js, Kotlin
          </li>
          <li>
            <strong>Frameworks:</strong> Spring Boot, Hibernate, JPA,
            Microservices, Docker, Selenium
          </li>
          <li>
            <strong>Big Data:</strong> Apache Hadoop, Apache Spark, Apache
            Kafka, Redis, ElasticSearch
          </li>
          <li>
            <strong>Cloud & Infrastructure:</strong> Azure, AWS (EC2, S3, RDS),
            GIT, Jenkins, Kubernetes
          </li>
          <li>
            <strong>APIs & Integration:</strong> REST APIs, OAuth, JSON Web
            Token Authentication, OIDC, CI/CD, GraphQL
          </li>
        </ul>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="experience">
        <Timeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2></h2>
        <Projects3D />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Aravind Modala | Built with React & Three.js</p>
      </footer>
    </div>
  );
}

export default App;
