import Github from "./../assets/github-logo.png"
import CV from "./../assets/cv.png"
import LinkedIn from "./../assets/linkedin-logo.png"

import './BottomNav.css'

export default function BottomNav() {
  return (
    <div class="left-flex fixed-left">
    <a href="https://github.com/abhiram-satha" target="_blank"><img className="bottom-nav" src={Github}/></a>
    <a href="https://resume.creddle.io/resume/hvf63d7muel" target="_blank"><img className="bottom-nav" src={CV}/></a>
    <a href="https://linkedin.com/in/abhiramsatha" target="_blank"><img className="bottom-nav" src={LinkedIn}/></a>

  </div>
  )
}