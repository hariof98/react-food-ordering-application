/* second - react-jsx */

import React from "react";
import ReactDOM from "react-dom/client";

// React Elements (kind of similar to DOM Elements)
const element = React.createElement("h1", { id: "heading" }, "Element without JSX");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// JSX (JavaScript syntax extension)
/* - JSX is a syntax. JSX and React are not same. JSX is not a part of React
   - JSX is used to simplify the creation of DOM elements(createElement) and other DOM manipulations in React 
   - JSX is HTML like syntax, it is not HTML in JavaScript
   - Attributes in JSX needs to be in camelCase
*/

const jsxElement = (
    <h1 id="heading" className="jsxHeading">
        Element with JSX
    </h1>
);

console.log(jsxElement); // this gives an Object

/* This is not a valid JS, so it is not understandable by JS engine and browsers. 
   But parcel transpiles this with Babel and Babel converts it into native React.createElement 
   which gives an Object and that Object will be rendered as HTML in browser. 
   
   React's createElement api provides an Object as a response, render in react will convert/render it 
   as HTML for the browser to understand it better.

   JSX => Babel => React.createElement => Object => rendered as HTML in browser

   Babel will convert <h1 id="heading">Element with JSX</h1> into React.createElement and the same procedure follows.
   It will be returned as object and the render in React will convert into HTML that browser understands. */
root.render(jsxElement);
