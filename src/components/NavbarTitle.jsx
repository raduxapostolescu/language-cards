import React, { Component } from "react";
import { init } from "ityped";

class NavbarTitle extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: [
        "Duukn's Language Cards",
        "Deutsch ist FUN",
        "...und manchmal schwer",
      ],
      startDelay: 2000,
      typeSpeed: 200,
      backSpeed: 200,
    });
  }
  render() {
    return <div id="myElement"></div>;
  }
}

export default NavbarTitle;
