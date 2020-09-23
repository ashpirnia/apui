import React, { Component }  from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
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

function handleClick() {
  window.location.assign("https://images-for-ash-website.s3-ap-southeast-2.amazonaws.com/apui-imgs/IMG_20180714_085534.jpg");
}

export default App;