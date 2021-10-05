import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import about from './pages/about';
import solver from './pages/solver';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
   
    <div className="App">
      <Router>
        <NavBar/>
          <Switch>
            <Route path="/" exact component = {solver} />
            <Route path="/solver" exact component = {solver} />
            <Route path="/about" exact component = {about} />
          </Switch>
      </Router>
    </div>
   
  );
}

export default App;
