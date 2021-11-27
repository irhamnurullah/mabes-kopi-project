import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />;
      <Route path="/menu" component={Menu} />;
      <Route path="/contact" component={Contact} />;
      <Route path="/about" component={About} />;
    </Switch>
  );
};

export default Router;
