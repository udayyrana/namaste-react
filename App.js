// const heading = React.createElement("h1", {/*this object is for attributes of the tag like id or class*/}, "Hello World");

/* 
    <div id="parent">
        <div id="child">
            <h1>I'm a h1 tag </h1>
            <h2>I'm a h2 tag </h2>
        </div>
        <div id="child2">
            <h1>I'm a h1 tag </h1>
            <h2>I'm a h2 tag </h2>
        </div>
    </div>
*/

//core of react
// createElement gives an object not html element
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
