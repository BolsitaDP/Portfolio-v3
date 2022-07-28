import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <h2>Santiago Giraldo's Portfolio</h2>
      <hr />
      <p>
        This is a second version of my Portfolio. You can view the first version
        in:
      </p>
      <a
        href="https://santiagogiraldo-portfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer">
        https://santiagogiraldo-portfolio.netlify.app/
      </a>
      <p>Portfolio 100% original</p>
    </div>
  );
};

export default Footer;
