// this component is designed with class component - "Just For Fun"

import React from "react";

class CartComponent extends React.Component {
    constructor(props) {
        super(props); // super keyword is used to initialize the props properly in the component
        console.log(props);

        const { itemName, itemCount } = props;

        // class-based components do not have access to React hooks, as they are an older way of creating components in React.
        // this is the way to declate state in class components
        this.state = {
            name: itemName,
            count: itemCount,
        };
    }

    componentDidMount() {
        console.log("component is rendered");
    }

    render() {
        const cartLayout = (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.count}</div>

                <button
                    onClick={() => {
                        this.setState({
                            // changing the state
                            name: "-",
                            count: 0,
                        });
                    }}>
                    Clear Cart!
                </button>
            </div>
        );

        return cartLayout;
    }
}

export default CartComponent;
