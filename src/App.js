import React from 'react';
import './App.css';
import './pages/page.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './NavBar/NavBar';
import about from './pages/about';
import solver from './pages/solver';
import Footer from "./components/footer"


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
      <Footer/>
    </div>
   
  );
}

export default App;
