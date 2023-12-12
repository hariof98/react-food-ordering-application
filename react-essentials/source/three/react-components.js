/* third - react components */

import React from "react";
import ReactDOM from "react-dom/client";

/* 
Two types of components in React:
    1. Class Based Components (old way)
    2. Functional Components (new way)
*/

// React Functional Component - It is a normal JavaScript function 😆 which returns some JSX
// React Components should always be declared with PascalCase
const FunctionalComponent = () => {
    const jsx = (
        <div className="test">
            <h1>This is React's Functional Component</h1>
        </div>
    );
    return jsx;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent />); // this is the syntax to render Functional Component in React

// nesting multiple components
const AnotherFunctionalComponent = () => {
    const jsx2 = (
        <div>
            <FunctionalComponent />
            <h2>Nested Functional Component</h2>
        </div>
    );
    return jsx2;
};

root.render(<AnotherFunctionalComponent />);

// in react, inside jsx or functional component, we can inject any piece of JavaScript code using {}

const test = "hello";
const spanTag = <span>span hello</span>;

const JavaScriptPiece = (
    <div>
        <h1>{test}</h1>
        <h1>{spanTag}</h1>
        <h2>{100 + 500}</h2>
        {console.log("It's working!")}
    </div>
);

root.render(JavaScriptPiece);

// you can also render a react element like JavaScriptPiece(a jsx) inside jsx or functional component
const FinalRender = () => {
    const finalData = (
        <div>
            <h1>Final Example</h1>
            {JavaScriptPiece}
        </div>
    );

    return finalData;
};

root.render(<FinalRender />);
