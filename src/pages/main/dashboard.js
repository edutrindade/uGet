import React, { Component } from "react";
import { Card, Button } from "tabler-react";
import { Link } from "react-router-dom";

import "./dashboard.css";

export default class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Button</Button>
        </Card.Body>
      </Card>
    );
  }
}
