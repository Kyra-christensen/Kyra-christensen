import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about"> 
            <About />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/resume" element={<Resume />} />
        </Switch>
      </Router>
    </div>
    
    
  );
}

export default App;
