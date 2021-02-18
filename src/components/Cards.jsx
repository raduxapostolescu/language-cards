import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import LanguageCards from "./LanguageCards";

class Cards extends Component {
  render() {
    return (
      <Fragment>
        <div className="container d-flex justify-content-center align-items-center mt-4">
          {this.props.cards
            .filter((card) => card.active === true)
            .map((c) => (
              <LanguageCards card={c} key={c.key} />
            ))}
          <Button variant={"success"} onClick={() => console.log("clicked")}>
            Hello
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
