/* first - react with CDN */

// to create an element in DOM - Syntax: React.createElement(tag, {attributes}, text);
const heading = React.createElement("h1", { id: "heading", class: "react-heading" }, "Hello World from React!"); // React is from react's first CDN (core react)
const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM is from react's second CDN (react for DOM manipulation)
root.render(heading); // render is like appendChild in JavaScript, but it will replace instead of appending

// nested HTML element structure with react
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hello Parent!"))
);

root.render(parent);

// more than one child
const siblings = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { key: "1" }, "Hello from child 1"),
        React.createElement("h2", { key: "2" }, "Hello from child 2"),
    ])
);

root.render(siblings);

// more nested and complicated
const mess = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child-1" }, [
        React.createElement("h1", {}, "Hello from child 1, child 1"),
        React.createElement("h2", {}, "Hello from child 1, child 2"),
    ]),
    React.createElement("div", { id: "child-2" }, [
        React.createElement("h1", {}, "Hello from child 2, child 1"),
        React.createElement("h2", {}, "Hello from child 2, child 2"),
    ]),
]);

//root.render(mess); // -> Inorder to avoid this complicated structure, we will use JSX
