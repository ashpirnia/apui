import React, { Component }  from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import APIGW from './ApiGtw'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import AppNav from './AppNav';

function App() {
  return (
    //<AppNav />
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/api-gateway">API Gateway --> Lambda</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/api-gateway">
            <APIGW />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Life goes on. </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
      </header>
      <footer className="App-footer">
        <p style={{color: "red"}}>
          Do NOT push this <Button variant="danger" onClick={handleClick}>button</Button>
        </p>
        <p>
          Running <a href="https://github.com/ashpirnia/apui">LSIM-6.8</a>
        </p>
      </footer>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function handleClick() {
  window.location.assign("https://images-for-ash-website.s3-ap-southeast-2.amazonaws.com/apui-imgs/IMG_20180714_085534.jpg");
}

export default App;