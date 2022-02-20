import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
  return (
    <>
        <IndexNavbar />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
 
        </section>
      </main>
    </>
  );
}
