import "./App.css";
import About from "./components/About";

import Contact from "./components/Contact";
import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />

      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
