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
          
        </div>

        <div className="project-flex">
          <a href="https://github.com/abhiram-satha/grubGrab" target="_blank">
            <img className="project-image" src={GrubGrab} />
          </a>
          <p>Grub Grab</p>
          
        </div>

        <div className="project-flex">
          <a href="https://github.com/abhiram-satha/tinyapp" target="_blank">
            <img className="project-image" src={Tinyapp} />
          </a>
          <p>TinyApp</p>
        </div>
      </div>
    </div>
  );
}
