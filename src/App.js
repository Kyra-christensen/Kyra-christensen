import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Connect from './Connect';
import Resume from './Resume';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <header className='NavLink'>
          <NavBar />
        </header>
        <main>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/connect" element={<Connect />} />
          <Route exact path="/resume" element={<Resume />} />
        </main>
      </Router>
    </div>
    
    
  );
}

export default App;
