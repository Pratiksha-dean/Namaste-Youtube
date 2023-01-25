import React from 'react'
import ReactDOM  from 'react-dom/client';
const h1 = React.createElement(
  "h1",
  { style: { color: "red" } },
  "This is heading 1"
);
const h2 = React.createElement(
  "h2",
  { className: "heading2" },
  "This is heading 2"
);
const container = React.createElement("div", {}, [h1, h2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
