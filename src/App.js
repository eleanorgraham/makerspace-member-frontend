import React, { Component } from 'react';
import logo from './logo_white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Staunton Makerspace</h2>
        </div>
        <p className="App-intro">
          We have the best members in the world.
        </p>
      </div>
    );
  }
}

export default App;
