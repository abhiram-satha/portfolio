import CSS from "../assets/CSS-logo.png"
import Javascript from "../assets/JS-logo.png"
import HTML from "../assets/html-logo.png"
import React from "../assets/react-logo.png"
import Github from "../assets/github-logo.png"
import Nodejs from "../assets/node-js-logo.png"
import psql from "../assets/postgresql-logo.png"

import "./Skills.css"

export default function Skills () {
  return (
    <div id="skills" className="skills-page page">
    This is a Skills Page
    <div className="skill-display">

    <img className="skill-view" src={HTML} alt="HTML logo" />

      <img className="skill-view" src={CSS} alt="CSS logo" />

      <img className="skill-view" src={Javascript} alt="JavaScript logo"/>

      <img className="skill-view" src={React} alt="React logo"/>
    </div>

    <div className="skill-display">

<img className="skill-view" src={psql} alt="PSQL logo" />

  <img className="skill-view" src={Nodejs} alt="Node.js logo" />

  <img className="skill-view" src={Github} alt="Github logo"/>

</div>
    </div>
  )
}