import React from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route path="/pizza" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
