import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-flex">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Abhiram Sathasivam
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-right">
              <ul className="nav ">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/abhiram-satha"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://resume.creddle.io/resume/hvf63d7muel"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://linkedin.com/in/abhiramsatha"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
