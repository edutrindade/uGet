import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Establishments from "./pages/establishments/establishments.js";
import Events from "./pages/events/events.js";
import Main from "./pages/main/dashboard.js";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/establishments" component={Establishments} />
      <Route path="/events" component={Events} />
      <Route path="/dashboard" component={Main} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
