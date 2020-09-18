import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Test from "./pages/test";

// CSS IMPORTS
import "./css/App.scss";
import "./css/easter.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
