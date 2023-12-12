import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./react-components/header-component/headerComponent.js";
import BodyComponent from "./react-components/body-component/bodyComponent.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing
import AboutComponent from "./react-components/about-component/aboutComponent.js";
import ErrorComponent from "./react-components/error-component/errorComponent.js";
import RestroMenuComponent from "./react-components/restro-menu-component/restroMenuComponent.js";
import CheckoutComponent from "./react-components/checkout-component/checkoutComponent.js";
//import ParentComponent from "./react-components/practise-components/life-cycle-component/parentComponent.js";
import useOnlineStatus from "../../../utilities/custom-hooks/useOnlineStatus.js";
import OnlineStatusComponent from "./react-components/online-status-component/onlineStatusComponent.js";
import CartDetails from "../../../utilities/contexts/CartDetails.js";
import reduxStore from "../../../utilities/redux-store/reduxStore.js";
import { Provider } from "react-redux";

/* dynamic imports of the component - lazy loading */
const ParentComponent = lazy(() => {
    return import("./react-components/practise-components/life-cycle-component/parentComponent.js");
});

const ScribbleNotesComponent = lazy(() => {
    return import("./react-components/redux-example/scribble-notes-component/ScribbleNotesComponent.js");
});

/* app planning 
    - Header
        - Logo
        - Nav Links
            - Home
            - About
            - Carrers
            - Cart
            - Account Settings

    - Body
        - Search Container
        - All Restaurant Container
            - Restaurant Cards
                - Good Image as Thumbnail
                - Name of the Restaurant
                - Type of Cusine
                - Ratings
                - Estimated Time of Delivery
                - Share option
                - General Description

    - Footer
        - Logo
        - Head Office Address
        - Social Media Links
        - Copyright
*/

const AppLayout = () => {
    const onlineStatus = useOnlineStatus();
    //console.log("root");

    const { itemList } = useContext(CartDetails);
    const [contextItemList, setContextItemList] = useState(itemList);

    if (onlineStatus === false) {
        return (
            <div>
                <HeaderComponent />
                <OnlineStatusComponent />
            </div>
        );
    }

    const finalLayout = (
        <Provider store={reduxStore}>
            <CartDetails.Provider value={{ itemList: contextItemList, setContextItemList }}>
                <div className="app-container">
                    <HeaderComponent />
                    <Outlet /> {/* this Outlet component will be replaced with other components based on the specified path */}
                </div>
            </CartDetails.Provider>
        </Provider>
    );

    return finalLayout;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/* createBrowserRouter takes an array of objects to create different routes. 
We have to specify the path and the component that needs to be called for that path. */
const createRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/about",
                element: <AboutComponent />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestroMenuComponent />,
            },
            {
                path: "/checkout/:name/:count",
                element: <CheckoutComponent />,
            },
            {
                path: "/react/lifecycle/example",
                element: (
                    <Suspense fallback={<h1>page is loading...</h1>}>
                        <ParentComponent />
                    </Suspense>
                ),
            },
            {
                path: "/scribble/",
                element: (
                    <Suspense fallback={<h1>scribble is loading...</h1>}>
                        <ScribbleNotesComponent />
                    </Suspense>
                ),
            },
        ],
    },
]);

/* Instead of directly rendering the main Functional Component, now we are defining those components 
and the routes for those components using createBrowserRouter, and rendering those collectively with RouterProvider component */
root.render(<RouterProvider router={createRoutes} />);
