import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello world!");

//jsx
// const jsxHeading = <h1>Hello World from jsx</h1>; //equivalent to heading
// it becomes react element on rendering, it is an object

// Component function --> its a normal js function which returns a React element

const Title = () => <h1>Namaste React using JSX</h1>;

const HeadingComponent = () => (
  <div>
    {/* this is component composition, component inside a component */}
    <Title />
    <Title></Title>
    {Title()}
    {/* all the three are same */}
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
