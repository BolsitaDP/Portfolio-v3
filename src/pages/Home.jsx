import React from "react";
import "../styles/home.css";
import homeImage from "../assets/homeImage.jpg";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">
        Santiago Giraldo's Portfolio
        <span ariia-hidden="true">Santiago Giraldo's Portfolio</span>
        <span ariia-hidden="true">Santiago Giraldo's Portfolio</span>
      </h1>
      <h3 className="homeSubtitle">Frontend web developer</h3>
      <div className="homeInfo">
        <p className="homeText">
          I am a 21-year-old web developer who found what he was passionate
          about a few years ago and decided to turn it into a sustainable way of
          living. For this, I opted for self-taught training, finding the
          balance between what he likes and what is profitable.
        </p>
        <img src={homeImage} alt="homeImage" className="homeImage" />
      </div>
      <hr className="hrSocials" />
      <div className="homeSocials">
        <a href="github.com" className="homeLink">
          Github
        </a>
        <a href="linkedin.com" className="homeLink">
          Linkedin
        </a>
      </div>
      <hr className="hrContainer" />
    </div>
  );
};

export default Home;
