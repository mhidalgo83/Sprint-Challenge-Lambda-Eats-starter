import React from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Help from "./components/Help";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route path="/help" component={Help} />
        <Route path="/" component={Form} />
      </Switch>
    </div>
  );
};
export default App;
