import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h2 className="skillsTitle">Skills</h2>
      <hr />
      <div className="skillsInfo">
        <p className="skillsText">
          I have really good soft skills, but I really don't think if you're
          reading this you're looking for someone who brags about his tolerance
          for frustration, or his impeccable planning, or his good understanding
          of teamwork, or his hunger to learn and eat the world. So I better
          show you my technical skills.
        </p>
        <div className="skillsCards">
          <div className="cardBasic">
            <h5 className="cardTitle">Basic web development</h5>
            <ul className="list">
              <li>HTML</li>
              <li className="firstLi">
                CSS
                <span>Tailwind</span>
                <span>CSS modules</span>
                <span>SASS</span>
              </li>
            </ul>
          </div>
          <div className="cardJs">
            <h5 className="cardTitle">JavaScript development</h5>
            <div className="">
              React <br />{" "}
              <ul className="list">
                <li>Hooks</li>
                <li>Router</li>
                <li>State</li>
                <li>Redux</li>
                <li>APIs</li>
                <li>Next.js</li>
                <li>Node Packages</li>
              </ul>
              Node.js in process ;)
            </div>
          </div>
          <div className="cardOthers">
            <h5 className="cardTitle">Others</h5>
            <ul className="list">
              <li>MySQL</li>
              <li>PHP</li>
              <li>Unity</li>
              <li>GameMaker Studio 2</li>
              <li>Some design softwares</li>
              <li>Psychology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
