import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Index from "views/Index.js";
import Tax from "views/tax";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Auth} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/" exact component={Index} />
      <Route path="/tax" exact component={Tax} />
      <Route path="/users" exact component={Index} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
