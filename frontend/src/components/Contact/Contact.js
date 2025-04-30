import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p className="contact-subtext">
        I’d love to hear from you! Whether it’s an idea, collaboration, or just
        a hello.
      </p>

      <div className="contact-content">
        <form
          className="contact-form"
          action="https://formspree.io/f/yourformid"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <a href="mailto:your@email.com">pratiksingh0580@gmail.com</a>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+91XXXXXXXXXX">+91 7058058027</a>
          </div>
          <div className="info-item">
            <FaLinkedin className="icon" />
            <a
              href="https://linkedin.com/in/pratik-singh-559880253"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="info-item">
            <FaInstagram className="icon" />
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
