import React from "react";
import "./Project.css";
import { FaTwitter, FaShoppingBag } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p className="projects-intro">
        Here are a few impactful projects I've built—bridging technology,
        design, and real-world utility.
      </p>

      <div className="project-list">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-icon">
            <FaTwitter />
          </div>
          <div className="project-info">
            <h2>Twitter-Based Sentiment Analysis for Elections 2024</h2>
            <p>
              A machine learning platform to analyze public sentiment on Twitter
              about the 2024 elections. Implemented 3 ML algorithms to improve
              classification accuracy and visualized real-time insights from
              Twitter data.
            </p>
            <a
              href="https://colab.research.google.com/drive/16y85VtTPj7L8xEii0Tmc6RwNyLNo2n6o?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-icon">
            <FaShoppingBag />
          </div>
          <div className="project-info">
            <h2>Artisans of India – E-Commerce Platform</h2>
            <p>
              Full-stack platform connecting Indian artisans with global buyers.
              Features include an admin GUI, secure payment, and responsive
              design. Built for accessibility and empowerment of local
              craftsmanship.
            </p>
            <a
              href="https://github.com/Pratiksingh058/artisansofindia"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
