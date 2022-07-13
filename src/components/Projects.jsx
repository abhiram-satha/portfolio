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
        <div className="project-flex">
          <a
            href="https://github.com/abhiram-satha/fit_with_us"
            target="_blank"
          >
            <img className="project-image" src={FitWithUs} />
          </a>
          <p>Fit With Us</p>
          <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    nested
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae magni omnis delectus nemo, maxime molestiae dolorem
                      numquam mollitia, voluptate ea, accusamus excepturi
                      deleniti ratione sapiente! Laudantium, aperiam doloribus.
                      Odit, aut.
                    </span>
                  </Popup>
                  <button
                    className="button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <button className="btn" onClick={() => fitWithUsButton()}>
            Case Study
          </button>

          <div className={fitWithUsDisplay}>
            <p>
              A meal prep app that helps the user decide their meal for the week
              based on food preferences and weight goals. Includes a community
              forum where users can create posts and comment. And users can earn
              badges based on their achievements.
            </p>
            <p>
              Backend: Express
              <br />
              Front-End: React, CSS, Bulma
            </p>
            <a
              href="https://github.com/abhiram-satha/fit_with_us"
              target="_blank"
              className="para-text"
            >
              More Details
            </a>
          </div>
        </div>

        <div className="project-flex">
          <a
            href="https://github.com/abhiram-satha/grubGrab"
            target="_blank"
            className="para-text"
          >
            <img className="project-image" src={GrubGrab} />
          </a>
          <p>Grub Grab</p>
          <button className="btn" onClick={() => grubGrabButton()}>
            Case Study
          </button>
          <div className={grubGrabsDisplay}>
            <p>
              A food ordering website where customers can add food to their cart
              and checkout. An admin portal where the user can add new menu
              items and respond to customers and about pick up times.
            </p>
            <p>
              Backend: Express
              <br />
              Front-End: HTML, CSS, SASS
            </p>
            <a
              href="https://github.com/abhiram-satha/grubGrab"
              target="_blank"
              className="para-text"
            >
              More Details
            </a>
          </div>
        </div>

        <div className="project-flex">
          <a href="https://github.com/abhiram-satha/tinyapp" target="_blank">
            <img className="project-image" src={Tinyapp} />
          </a>
          <p>TinyApp</p>
          <button className="btn" onClick={() => tinyAppButton()}>
            Case Study
          </button>
          <div className={tinyAppDisplay}>
            <p>
              An app with login encryption where users can get shortened URL
              link that users can use to visit the website. Users are only able
              to get the URLs for websites that they have added.
            </p>
            <p>
              Backend: Express
              <br />
              Front-End: EJS, Bootstrap
            </p>
            <a
              href="https://github.com/abhiram-satha/tinyapp"
              target="_blank"
              className="para-text"
            >
              More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
