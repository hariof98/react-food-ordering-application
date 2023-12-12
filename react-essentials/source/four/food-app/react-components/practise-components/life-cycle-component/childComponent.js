import React from "react";

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name + " Called");
    }

    componentDidMount() {
        console.log(this.props.name + " Mounted");
        const a = document.getElementsByClassName("parent");
        a[0].innerHTML = this.props.parentName;
    }

    render() {
        const { name } = this.props;
        console.log(name + " Rendered");

        const classTwo = (
            <div>
                <p>{name}</p>
            </div>
        );

        return classTwo;
    }
}

export default ChildComponent;
