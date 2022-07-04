import Github from "./../assets/github-logo.png"
import CV from "./../assets/cv.png"
import LinkedIn from "./../assets/linkedin-logo.png"

import './BottomNav.css'

export default function BottomNav() {
  return (
    <div class="fixed-left left-flex">
    <a href="https://github.com/abhiram-satha" target="_blank"><img className="bottom-nav" src={Github}/></a>
    <a href="https://github.com/abhiram-satha" target="_blank"><img className="bottom-nav" src={CV}/></a>
    <a href="https://github.com/abhiram-satha" target="_blank"><img className="bottom-nav" src={LinkedIn}/></a>

  </div>
  )
}