import React from "react";
import ChildComponent from "./childComponent.js";

/* demonstrating the life-cycle of react with class components */

class ParentComponent extends React.Component {
    constructor() {
        super();
        console.log("Partent Component Called");
    }

    /* This is like useEffect() hook in functional component. 
    This will be called when the rest of the component is mounted on to the dom. 
    Unlike useEffect(), this will always execute only once after the initial render. */
    componentDidMount() {
        console.log("Parent Component Mounted");
    }

    /* This will be called when the component is unmounted from the DOM, i.e. when we switch to a different page or module. */
    componentWillUnmount() {
        console.log("component is unmounted");
    }

    render() {
        console.log("Partent Component Rendered");
        const classOne = (
            <div>
                <p className="parent">Parent Component</p>
                <ChildComponent name={"Child Component Two"} parentName={"Parent Component Updated by Child Component 1"} />
                <ChildComponent name={"Child Component Three"} parentName={"Parent Component Updated by Child Component 2"} />
            </div>
        );

        return classOne;
    }
}

export default ParentComponent;

/* 
    - In class components, first the constructor will be called and executed
        - In this case of ParentComponent, first "Partent Component Called" will be logged

    - After constructor, the render method will be called.
        - In this case of ParentComponent, "Partent Component Rendered" will be logged

    - Here, we have two ChildComponents, which have their own rendering process with constructor, render, 
    componentDidMount, etc. Since, the ChildComponents is called before the render of the ParentComponent is completed, 
    the codes inside ChildComponent will be excuted in the same way like ParentComponent. 
    But in the case of ChildComponents, those components will complete their full lifecycle process since there are 
    no other components nested inside them, so the code inside componentDidMount will also get executed.

    - After the "Parent Component Rendered", we will get 
        - "Child Component Two Called" - from the constructor of childComponent.js
        - "Child Component Two Rendered" - from the render method of childComponent.js
        - Since there is another child component after this in parent, the componentDidMount will not get executed now.

        - We have another child component, so we will get 
            - "Child Component Three Called" - from the constructor of childComponent.js
            - "Child Component Three Rendered" - from the render method of childComponent.js
            - The componentDidMount will not get executed now.

    - The componentDidMount method is not being executed in the flow due to React's lifecycle behavior. 
    When there are multiple child components present, React will batch the Render Phase (which includes the constructor 
    and render method) of the child components together. Therefore, once the Render phase is completed, 
    the Commit Phase (componentDidMount) will be executed.

    - This is happening because, Commit Phase is where the DOM manipulation happens. DOM manipulation is very critical process,
    so before doing that, React is batching the Render Phase and completes the process, and once when the render phase 
    is completed, with all the data available to render, react will enter the Commit Phase to make changes in the DOM.
*/
