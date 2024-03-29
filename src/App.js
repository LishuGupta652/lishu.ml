import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CSS IMPORTS
import "./css/app.css";
import "./css/ui.css";
import "./css/about.css";
import "./css/test.css";
import "./css/auth.css"

// Components
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Test from "./pages/test";
import NotFound from "./pages/notfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
