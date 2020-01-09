import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Button, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./image.png";

import "./styles.css";
import "./form.scss";

export default class Login extends Component {
  render() {
    return (
      <div className="cont">
        <div className="col">
          <img src={Image} className="img"></img>
        </div>
        <div className="col col-2">
          <div className="boxform">
            <p>
              <div className="tittle">u G e t</div>
              <div className="slogan">Inovando seu evento</div>
              <Form>
                <FormGroup>
                  <div className="form__group field">
                    <input
                      type="input"
                      className="form__field"
                      placeholder="Usuário"
                      name="user"
                      id="user"
                      required
                    />
                    <label for="user" className="form__label">
                      Usuário
                    </label>
                  </div>
                </FormGroup>
                <FormGroup controlId="formGroupPassword">
                  <div className="form__group field">
                    <input
                      type="password"
                      className="form__field"
                      placeholder="Senha"
                      name="password"
                      id="password"
                      required
                    />
                    <label for="user" className="form__label">
                      Senha
                    </label>
                  </div>
                </FormGroup>
                <Link to="/establishments">
                  <Button variant="dark" className="buttons">
                    Login
                  </Button>
                </Link>
                <Button variant="outline-secondary" className="buttons">
                  Solicitar cadastro
                </Button>
              </Form>
            </p>
            <p>
              <Link to="#">
                <div className="footer">Termos de Serviço</div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
