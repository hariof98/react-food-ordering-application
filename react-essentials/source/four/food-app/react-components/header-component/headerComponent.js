import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../../../../utilities/custom-hooks/useOnlineStatus";
import CartDetails from "../../../../../utilities/contexts/CartDetails";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const [btnStatus, setBtnStatus] = useState("Login");

    const headerOnlineStatus = useOnlineStatus();

    const { itemList } = useContext(CartDetails);
    //console.log(itemList);
    //console.log("header");

    /* subscribing to the Redux Store using Selector */
    const dietPlanData = useSelector((store) => {
        return store.diet; // this store will give an Object with different slices that are configured inside the common reducer in reduxStore.js file.
        // here we are accessing only the slice(diet) that is required for this component.
    });
    //console.log(dietPlanData);

    const headerLayout = (
        <div className="header-container">
            <div className="logo-class">
                <img src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_1280.png" />
            </div>

            <div className="navigation-class">
                <ul className="nav-list">
                    <li>Online: {headerOnlineStatus ? "✅" : "🔴"} </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/react/lifecycle/example">Careers</Link>
                    </li>
                    <li>
                        <Link to={`/checkout/${itemList.length !== 0 ? itemList.map((data) => data.name) : "-"}/${itemList.length}`}>
                            🛒 Cart: {itemList.length}
                        </Link>
                    </li>
                    <li>
                        <Link to="/scribble">Diet Plan: {dietPlanData.list.length} Items</Link>
                    </li>
                    <li>
                        <Link to="/">Account</Link>
                    </li>
                    <li>
                        <button
                            className="app-login-btn"
                            onClick={() => {
                                btnStatus === "Login" ? setBtnStatus("Logout") : setBtnStatus("Login");
                            }}>
                            {btnStatus}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );

    return headerLayout;
};

export default HeaderComponent;
