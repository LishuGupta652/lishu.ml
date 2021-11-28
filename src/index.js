import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const ThemeContext = React.createContext("light");

ReactDOM.render(
  <ThemeContext.Provider value={"light"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);

serviceWorker.register();
