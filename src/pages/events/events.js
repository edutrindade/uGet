import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Image from "../login/image.png";

import "./styles.css";

export default class Events extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="cont">
        <div className="col">
          <img src={Image} className="img"></img>
        </div>

        <div className="col">
          <div className="header">
            <Button className="btn-create">Criar evento</Button>
          </div>

          <div className="event-search">
            <strong> E V E N T O S </strong>
            <p>Você possui mais de um evento, selecione qual deseja acessar:</p>
            <input type="input" placeholder="buscar"></input>
          </div>

          <div className="event-list">
            <Link to="/dashboard" className="link">
              <article>
                <strong>Evento 01</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
                <p>09/01/2020</p>
              </article>
            </Link>
            <Link to="/dashboard" className="link">
              <article>
                <strong>Evento 02</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
                <p>09/01/2020</p>
              </article>
            </Link>
            <Link to="/dashboard" className="link">
              <article>
                <strong>Evento 03</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
                <p>09/01/2020</p>
              </article>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
