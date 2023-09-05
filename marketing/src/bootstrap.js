import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const marketingApp = document.querySelector("#_marketing-app");

  if (marketingApp) {
    mount(marketingApp);
  }
}

export default mount;
