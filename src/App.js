import './App.css';
import Contact from './components/Contact';
import HomePage from './components/HomePage';

import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />

      <HomePage />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
