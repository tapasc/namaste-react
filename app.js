const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello World")
  )
);
const app = React.createElement("h1", {}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
app.props.children = "aaaa";
root.render(parent);
