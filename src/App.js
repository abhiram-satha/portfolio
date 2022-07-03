import './App.css';
import HomePage from './components/HomePage';

import Navbar from './components/Navbar'
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />

      <HomePage />

      <Resume />
    </div>
  );
}

export default App;
