//import logo from "./logo.svg";
//import "./App.css";
//import { Switch } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Mainhero } from "./components/hero/mainhero";

function App() {
  return (
    <Switch>
      <Route exact path="/my" component={Mainhero} />
      <Redirect from="/" to="/my"></Redirect>
    </Switch>
  );
}

export default App;
