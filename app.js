import React from "react";
import ReactDOM from "react-dom/client";
import HeadComp, { jsxheading } from "./Some";

const heading = React.createElement(
  "h1",
  { id: "head" },
  "Hello world from react js csv file"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
