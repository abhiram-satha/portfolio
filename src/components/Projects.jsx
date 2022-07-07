import "./Projects.css";

import FitWithUs from "./../assets/fitwithus-logo.png";
import GrubGrab from "./../assets/grubgrab.png";
import Tinyapp from "./../assets/tinyapp.png";
import {useState} from 'react';

const classNames = require('classnames')

export default function Projects() {

  const [fitWithUs, setFitWithUs] = useState(true);
  const [grubgrab, setGrubGrab] = useState(true);

  const fitWithUsButton = () => {
    
    setFitWithUs(!fitWithUs)
  }

  const fitWithUsDisplay = classNames({displayFitWithUs: fitWithUs})

  return (
    <div id="projects" className="page">
      <div className="heading-flex flex-form">
        <h1 className="title-style">Projects</h1>
      </div>

      <div className="project-grid">
        <div className="project-flex">
          <a
            href="https://github.com/abhiram-satha/fit_with_us"
            target="_blank"
          >
            <img className="project-image" src={FitWithUs} />
          </a>
          <p>Fit With Us</p>
          <button className="btn" onClick={()=>fitWithUsButton()}>Case Study</button>
          <div className={fitWithUsDisplay}>
            <p>
              A meal prep app that helps the user decide their meal for the week
              based on food preferences and weight goals. Includes a community
              forum where users can create posts and comment. And users can earn
              badges based on their achievements.
            </p>
            <p>
              Backend: Express.js
              <br />
              Front-End: React, CSS
            </p>
          </div>
        </div>

        <div className="project-flex">
          <a href="https://github.com/abhiram-satha/grubGrab" target="_blank">
            <img className="project-image" src={GrubGrab} />
          </a>
          <p>Grub Grab</p>
          <button className="btn">Case Study</button>
          <div>
            <p>
              A food ordering website where customers can add food to their cart
              and checkout.  An admin portal where the user can add new menu items
              and respond to customers and about pick up times.
            </p>
            <p>
              Backend: Express.js
              <br />
              Front-End: HTML, CSS
            </p>
          </div>
        </div>

        <div className="project-flex">
          <a href="https://github.com/abhiram-satha/tinyapp" target="_blank">
            <img className="project-image" src={Tinyapp} />
          </a>
          <p>TinyApp</p>
          <button className="btn">Case Study</button>
          <div>
            <p>
              A meal prep app that helps the user decide their meal for the week
              based on preferences and weight goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
