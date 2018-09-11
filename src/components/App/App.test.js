import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

it("renders without crashing", () => {
  const main = document.createElement("main");
  ReactDOM.render(<App />, main);
  ReactDOM.unmountComponentAtNode(main);
});
