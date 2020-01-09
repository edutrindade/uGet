import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../login/image.png";

import "./styles.css";

export default class Establishments extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="cont">
        <div className="col">
          <img src={Image} className="img"></img>
        </div>

        <div className="col">
          <div className="header"></div>

          <div className="establishment-search">
            <strong> E S T A B E L E C I M E N T O S </strong>
            <p>Você gerencia mais de um local, escolha qual deseja acessar:</p>
            <input type="input" placeholder="buscar"></input>
          </div>

          <div className="establishment-list">
            <Link to="/events" className="link">
              <article>
                <strong>Allianz Parque</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
              </article>
            </Link>
            <Link to="/events" className="link">
              <article>
                <strong>Allianz Parque</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
              </article>
            </Link>
            <Link to="/events" className="link">
              <article>
                <strong>Allianz Parque</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
              </article>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
