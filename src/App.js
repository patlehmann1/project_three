import React, { Component } from "react";
import "./App.css";
import LandingPage from './components/LandingPage';
import ButtonAppBar from './components/ButtonAppBar';


class App extends Component {
  render() {
    return (
      <div className="main-element">
      <div className="overlay">
      <ButtonAppBar
      container />
      <LandingPage />
      </div>
      </div>
    );
  }
}

export default App;
