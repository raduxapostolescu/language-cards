import "./App.css";
import React, { Component } from "react";
import Navbarmenu from "./components/Navbar";
import Cards from "./components/Cards";
import { defaultData } from "./data/state";

class App extends Component {
  state = defaultData;

  render() {
    return (
      <React.Fragment>
        <Navbarmenu />
        <Cards cards={this.state.cardData} />
      </React.Fragment>
    );
  }
}

export default App;
