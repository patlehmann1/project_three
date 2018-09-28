import React, { Component } from "react";
import "./App.css";
import LandingPage from './components/LandingPage';
import ButtonAppBar from './components/ButtonAppBar';

class App extends Component {
  render() {
    return (
      <div>
      <ButtonAppBar />
      <LandingPage />
      </div>
    );
  }
}

export default App;
