import React from "react";
import "./About.css";
import {
  FaLightbulb,
  FaRocket,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Me</h1>
        <p>
          Builder of meaningful ventures at the intersection of fashion, tech,
          and community.
        </p>
      </section>

      <section className="about-details">
        <div className="about-card">
          <FaLightbulb className="icon" />
          <h3>Creative Thinker</h3>
          <p>
            I thrive on ideation. Whether it’s startups or storytelling, I bring
            fresh perspectives to the table.
          </p>
        </div>
        <div className="about-card">
          <FaRocket className="icon" />
          <h3>Startup Enthusiast</h3>
          <p>
            From launching my own fashion-tech brand to mentoring others,
            building drives me.
          </p>
        </div>
        <div className="about-card">
          <FaUserFriends className="icon" />
          <h3>Community Builder</h3>
          <p>
            I believe strong communities can change the world—and I’ve helped
            create a few myself.
          </p>
        </div>
      </section>

      <section className="about-summary">
        <h2>Quick Facts</h2>
        <div className="fact-grid">
          <div className="fact-item">
            <FaCheckCircle className="fact-icon" />
            <p>Founded FYPI – Fashion x Tech venture</p>
          </div>
          <div className="fact-item">
            <FaCheckCircle className="fact-icon" />
            <p>Organized C-Summit’25 with ₹3L+ funding</p>
          </div>
          <div className="fact-item">
            <FaCheckCircle className="fact-icon" />
            <p>Built HelpStartup to mentor student entrepreneurs</p>
          </div>
          <div className="fact-item">
            <FaCheckCircle className="fact-icon" />
            <p>Passionate about Gen AI, Communication & Design</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
