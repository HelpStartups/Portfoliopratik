import React from "react";
import "./Home.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedal,
  FaAward,
  FaCertificate,
  FaBrain,
  FaRobot,
  FaMagic,
  FaUsers,
} from "react-icons/fa";
import Img from "../../assets/photo.png";

const hardSkills = [
  {
    name: "React.js",
    description: "Used in building frontends for startups like FYPI & Vecrep.",
    level: 90,
  },
  {
    name: "Node.js",
    description: "Backend API development for Artisans of India.",
    level: 80,
  },
  {
    name: "Python",
    description: "Applied in ML project for 2024 Election Sentiment Analysis.",
    level: 75,
  },
  {
    name: "MongoDB",
    description: "Used in full-stack apps for storing product & user data.",
    level: 70,
  },
  {
    name: "Graphics Designing",
    description: "Created branding assets for campaigns and product launches.",
    level: 85,
  },
];

const softSkills = [
  {
    name: "Leadership",
    description: "Led student organizations and large-scale summits.",
    level: 90,
  },
  {
    name: "Public Speaking",
    description: "Hosted workshops and represented at events.",
    level: 85,
  },
  {
    name: "Storytelling",
    description: "Created impactful narratives for pitches and campaigns.",
    level: 85,
  },
  {
    name: "Strategic Thinking",
    description: "Built and scaled initiatives with long-term vision.",
    level: 80,
  },
  {
    name: "Team Management",
    description: "Managed cross-functional teams across projects.",
    level: 88,
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>Hello, I'm Pratik Singh</h1>
          <p>
            Builder of meaningful ventures at the intersection of fashion, tech,
            and community.
          </p>
          <div className="hero-buttons">
            <a href="#skills" className="btn">
              Explore Skills
            </a>
            <a href="https://wa.me/919341443149" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={Img} alt="Profile" />
          <div className="socials">
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
            <a href="https://github.com">
              <FaGithub />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>

        <h3 className="skills-subheading">Hard Skills</h3>
        <div className="skill-cards">
          {hardSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <h4>{skill.name}</h4>
                <div className="circular-progress">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle-bg"
                      d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831A15.9155 15.9155 0 1 1 18 2.0845"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${skill.level}, 100`}
                      d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831A15.9155 15.9155 0 1 1 18 2.0845"
                    />
                    <text
                      x="18"
                      y="20.35"
                      className="percentage"
                      textAnchor="middle"
                    >
                      {skill.level}%
                    </text>
                  </svg>
                </div>
              </div>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>

        <h3 className="skills-subheading">Soft Skills</h3>
        <div className="skill-cards">
          {softSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <h4>{skill.name}</h4>
                <div className="circular-progress">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle-bg"
                      d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831A15.9155 15.9155 0 1 1 18 2.0845"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${skill.level}, 100`}
                      d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831A15.9155 15.9155 0 1 1 18 2.0845"
                    />
                    <text
                      x="18"
                      y="20.35"
                      className="percentage"
                      textAnchor="middle"
                    >
                      {skill.level}%
                    </text>
                  </svg>
                </div>
              </div>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h2>Achievements</h2>
        <div className="achievement-cards">
          <div className="card">
            <FaMedal className="icon" />
            <h3>Head Organizer – C-Summit’25</h3>
            <p>
              Partnered with Earth Day Network & Why Waste Wednesdays. Raised ₹3
              Lakhs in funding.
            </p>
          </div>
          <div className="card">
            <FaUsers className="icon" />
            <h3>Collaboration with IITs</h3>
            <p>
              Worked with IIT Roorkee & IIT Kanpur on E-Cell flagship events.
            </p>
          </div>
          <div className="card">
            <FaBrain className="icon" />
            <h3>Mentorship Impact</h3>
            <p>
              Mentored 4 students via HelpStartup who launched their own
              startups.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates">
        <h2>Certificates</h2>
        <div className="cert-card-container">
          <div className="cert-card">
            <FaCertificate className="icon" />
            <h3>Leadership Communication</h3>
            <p>Northwestern University</p>
          </div>
          <div className="cert-card">
            <FaAward className="icon" />
            <h3>Sales Multiplier</h3>
            <p>Smart Consultancy</p>
          </div>
          <div className="cert-card">
            <FaRobot className="icon" />
            <h3>Introduction to LLM</h3>
            <p>Google Cloud Certificate</p>
          </div>
          <div className="cert-card">
            <FaMagic className="icon" />
            <h3>Introduction to Gen AI</h3>
            <p>Google Cloud Certificate</p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey">
        <h2>My Journey</h2>
        <div className="journey-cards">
          <div className="journey-card">
            <h3>D2C – Pune</h3>
            <p>First Experience – Growth Phase</p>
          </div>
          <div className="journey-card">
            <h3>Prop Comrade </h3>
            <p>Startup Exposure</p>
          </div>
          <div className="journey-card">
            <h3>Hugg.co.in</h3>
            <p>Marketing Head</p>
          </div>
          <div className="journey-card">
            <h3>Vecrep</h3>
            <p>Frontend Intern</p>
          </div>
          <div className="journey-card">
            <h3>FYPI</h3>
            <p>Founded Fashion-Tech Startup</p>
          </div>
          <div className="journey-card">
            <h3>HelpStartup</h3>
            <p>Built Student-led Org</p>
          </div>
          <div className="journey-end">
            <p>...and the journey continues →</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
