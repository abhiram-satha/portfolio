import CSS from "../assets/CSS-logo.png";
import Javascript from "../assets/JS-logo.png";
import HTML from "../assets/html-logo.png";
import React from "../assets/react-logo.png";
import Github from "../assets/github-logo.png";
import Nodejs from "../assets/node-js-logo.png";
import psql from "../assets/postgresql-logo.png";

import "./Skills.css";

export default function Skills() {
  return (
    <div id="skills" className="skills-page page">
      <div className="heading-flex">
        <h1 className="title-style">Skills</h1>
        <p className="skills-paragraph">
          The technologies I have experience with:
        </p>
      </div>
      <div className="skill-display">
        <div className="imgcaption">
          <img className="skill-view" src={HTML} alt="HTML logo" />
          <p>HTML</p>
        </div>
        <div className="imgcaption">
          <img className="skill-view" src={CSS} alt="CSS logo" />
          <p>CSS</p>
        </div>
        <div className="imgcaption">
          <img className="skill-view" src={Javascript} alt="JavaScript logo" />
          <p>JavaScript</p>
        </div>
        <div className="imgcaption">
          <img className="skill-view" src={React} alt="React logo" />
          <p>React</p>
        </div>
      </div>

      <div className="skill-display">
      <div className="imgcaption">
        <img className="skill-view" src={psql} alt="PSQL logo" />
<p>PSQL</p>
</div>
<div className="imgcaption">
        <img className="skill-view" src={Nodejs} alt="Node.js logo" />
<p>Node.js</p>
</div>
<div className="imgcaption">
        <img className="skill-view" src={Github} alt="Github logo" />
        <p>GitHub</p>
        </div>
      </div>
    </div>
  );
}
