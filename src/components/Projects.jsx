import "./Projects.css";

import FitWithUs from "./../assets/fitwithus-logo.png";
import GrubGrab from "./../assets/grubgrab.png";
import Tinyapp from "./../assets/tinyapp.png";

import * as React from "react";
import Box from "@mui/material/Box";
import Portal from "@mui/material/Portal";

export default function Projects() {
  const [showfitforus, setshowfitforus] = React.useState(false);
  const [showgrubgrab, setshowgrubgrab] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setshowfitforus(!showfitforus);
    setshowgrubgrab(false)
  };

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
          <div>
      <button type="button" onClick={handleClick}>
        {showfitforus ? 'Hide Case Study' : 'Show Case Study'}
      </button>
      <Box>

        {showfitforus ? (
          <Portal container={container.current}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </Box>
      <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={container} />
    </div>
        </div>

        <div className="project-flex">
          <a href="https://github.com/abhiram-satha/grubGrab" target="_blank">
            <img className="project-image" src={GrubGrab} />
          </a>
          <p>Grub Grab</p>
          <div>
      <button type="button" onClick={handleClick}>
        {showgrubgrab ? 'Hide Case Study' : 'Show Case Study'}
      </button>
      <Box>

        {showgrubgrab ? (
          <Portal container={container.current}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </Box>
      <Box  ref={container} />
    </div>
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
