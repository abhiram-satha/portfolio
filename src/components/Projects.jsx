import "./Projects.css";

import FitWithUs from "./../assets/fitwithus-logo.png";
import GrubGrab from "./../assets/grubgrab.png";
import Tinyapp from "./../assets/tinyapp.png";

export default function Projects() {
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
          <button className="btn">Case Study</button>
          <div>
            <p>
              A meal prep app that helps the user decide their meal for the week
              based on food preferences and weight goals.
            </p>
            <p>
              Backend: Express.js
              <br />
              Front-End: React
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
              A food ordering website where customer can add food to their cart
              and checkout, an admin section to the site to add new menu items
              and respond to customers.
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
