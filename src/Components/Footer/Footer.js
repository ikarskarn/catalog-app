import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="contact-info rel">
      <p className="contact-item alt">Contact:</p>
      <a className="contact-item" href="mailto:devops@pixelgrindgames.com">
        Email
      </a>
      <a
        className="contact-item"
        href="https://www.linkedin.com/in/marc-tucker-3190884"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="contact-item"
        href="https://github.com/ikarskarn"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}
