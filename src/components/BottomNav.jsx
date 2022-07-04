import Github from "./../assets/github-logo.png"
import CV from "./../assets/cv.png"
import LinkedIn from "./../assets/linkedin-logo.png"

import './BottomNav.css'

export default function BottomNav() {
  return (
    <>
    <a href="https://github.com/abhiram-satha" target="_blank"><img className="bottom-nav" src={Github} alt="GitHub logo"/></a>
    <a href="https://resume.creddle.io/resume/hvf63d7muel" target="_blank"><img className="bottom-nav2" src={CV} alt="Resume symbol"/></a>
    <a href="https://linkedin.com/in/abhiramsatha" target="_blank"><img className="bottom-nav3" src={LinkedIn} alt="Linkedin logo"/></a>

  </>
  )
}