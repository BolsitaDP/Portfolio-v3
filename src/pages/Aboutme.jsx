import React from "react";
import "../styles/about.css";
import aboutImage from "../assets/aboutImage.png";

const Aboutme = () => {
  return (
    <div className="aboutContainer">
      <h2 className="aboutTitle">About Me</h2>
      <hr />
      <div className="aboutInfo">
        <div className="aboutText">
          <h5>How were my beginnings in development?</h5>
          <p>
            I have always liked programming, which made me decide to study
            software development with a focus on game development in school.
          </p>
          <br />
          <h5>Why did I become a web developer?</h5>
          <p>
            After learning some game development I concluded that I really liked
            programming but not focused on this area. Which led me to explore
            the world of web development, in which I feel comfortable and I
            like.
          </p>
          <br />
          <h5>
            How many years have you been studying web development in a
            self-taught way?
          </h5>
          <p>
            4 years ago I obtained the title of technician in software
            development, I took a break of 1 year where I focused on my
            university career (psychology) and after this I resumed my studies
            in a self-taught way. So 2 years, I have been studying web
            development for 2 years.
          </p>
          <br />
          <h5>Why did you go from psychology to study programming?</h5>
          <p>
            I love the human mind and I really wanted to study psychology, but I
            didn't feel fulfilled. I'm good with people, but I feel like I'm
            much better with machines and programming really makes me feel
            complete. What can I say? I love the code and the problems it brings
            (at least the solutions are based on logic and not on understanding
            people).
          </p>
        </div>
        <img src={aboutImage} alt="aboutImage" className="aboutImage" />
      </div>
    </div>
  );
};

export default Aboutme;
