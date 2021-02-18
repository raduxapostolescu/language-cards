import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class LanguageCards extends Component {
  render() {
    return (
      <Card style={this.getCardStyle()}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {this.props.card.word}
          </Card.Title>
          <Card.Subtitle
            style={{ textAlign: "center" }}
            className="mb-2 text-muted"
          >
            {this.props.card.type}
          </Card.Subtitle>
          <Card.Text style={{ textAlign: "center" }}>
            {this.props.card.description} <br />
            Ipsum Description Lorem Ipsum Lorem Ipsum Description Lorem Ipsum
            Lorem Ipsum
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  getCardStyle() {
    const cardColor = ["#8EE1D7", "#E9C46A", "#F4A261", "#F4A261", "#E76F51"];
    const randomColor = cardColor[Math.floor(Math.random() * cardColor.length)];
    return {
      width: "25rem",
      margin: "2rem",
      backgroundColor: randomColor,
    };
  }
}

export default LanguageCards;
