import React, { Component } from "react";
import "./App.css";
import LandingPage from './components/LandingPage';
import ButtonAppBar from './components/ButtonAppBar';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="main-element">
      <div className="overlay">
      <ButtonAppBar />
      <LandingPage />
      </div>
      </div>
      <div className="about-me">
      PATRICK WILLIAM LEHMANN
      </div>
      </div>
    );
  }
}

export default App;
