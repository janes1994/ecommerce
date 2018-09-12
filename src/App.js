import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import HomeMain from "./components/HomeMain";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <HomeMain/>
      </div>
    );
  }
}

export default App;
