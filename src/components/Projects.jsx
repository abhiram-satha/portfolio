import "./Projects.css";

import FitWithUs from "./../assets/fitwithus-logo.png";
import GrubGrab from "./../assets/grubgrab.png";
import Tinyapp from "./../assets/tinyapp.png";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const classNames = require("classnames");

export default function Projects() {
  const [fitWithUs, setFitWithUs] = useState(true);
  const [grubgrab, setGrubGrab] = useState(true);
  const [tinyApp, setTinyApp] = useState(true);

  const fitWithUsButton = () => {
    setFitWithUs(!fitWithUs);
    setGrubGrab(true);
    setTinyApp(true);
  };

  const grubGrabButton = () => {
    setGrubGrab(!grubgrab);
    setFitWithUs(true);
    setTinyApp(true);
  };

  const tinyAppButton = () => {
    setTinyApp(!tinyApp);
    setGrubGrab(true);
    setFitWithUs(true);
  };

  const fitWithUsDisplay = classNames({ displayProject: fitWithUs });
  const grubGrabsDisplay = classNames({ displayProject: grubgrab });
  const tinyAppDisplay = classNames({ displayProject: tinyApp });

  return (
    <div id="projects" className="page">
      <div className="heading-flex flex-form">
        <h1 className="title-style">Projects</h1>
      </div>

      <div className="project-grid">
        <div className="project-flex fit-with-us">
          <div className="image-and-title">
            <a
              href="https://github.com/abhiram-satha/fit_with_us"
              target="_blank"
            >
              <img className="project-image" src={FitWithUs} />
            </a>
            <h5 className="project-para title-project">Fit With Us</h5>
          </div>
          <div className="project-sum-link">
            <p className="project-para project-sum">
              A meal prep app that helps the user decide their meal for the week
              based on food preferences and weight goals. Includes a community
              forum where users can create posts and comment. And users can earn
              badges based on their achievements.
              <br />
              <br />
              Backend: Express
              <br />
              Front-End: React, CSS, Bulma
            </p>
            <button className="btn">
              <a
                href="https://github.com/abhiram-satha/fit_with_us"
                target="_blank"
                className="para-text"
              >
                Open in GitHub
              </a>
            </button>
          </div>
          <div className={fitWithUsDisplay}></div>
        </div>

        <div className="project-flex">
          <a
            href="https://github.com/abhiram-satha/grubGrab"
            target="_blank"
            className="para-text "
          >
            <img className="project-image" src={GrubGrab} />
          </a>
          <p>Grub Grab</p>

          <div>
            <Popup
              trigger={<button className="button btn"> See Details </button>}
              modal
              nested
            >
              <p>
                A food ordering website where customers can add food to their
                cart and checkout. An admin portal where the user can add new
                menu items and respond to customers and about pick up times.
              </p>
              <p>
                Backend: Express
                <br />
                Front-End: HTML, CSS, SASS
              </p>
              <button className="btn">
                <a
                  href="https://github.com/abhiram-satha/grubGrab"
                  target="_blank"
                  className="para-text"
                >
                  More Details
                </a>
              </button>
            </Popup>
          </div>
        </div>

        <div className="project-flex">
          <a href="https://github.com/abhiram-satha/tinyapp" target="_blank">
            <img className="project-image" src={Tinyapp} />
          </a>
          <p>TinyApp</p>
          <div>
            <Popup
              trigger={<button className="button btn"> See Details </button>}
              modal
              nested
            >
              <p>
                An app with login encryption where users can get shortened URL
                link that users can use to visit the website. Users are only
                able to get the URLs for websites that they have added.
              </p>
              <p>
                Backend: Express
                <br />
                Front-End: EJS, Bootstrap
              </p>
              <button className="btn">
                <a
                  href="https://github.com/abhiram-satha/tinyapp"
                  target="_blank"
                  className="para-text btn"
                >
                  More Details
                </a>
              </button>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}
