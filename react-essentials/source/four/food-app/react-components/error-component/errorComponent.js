import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const { status, statusText } = useRouteError();
    /* useRouteError is a hook given to us by react-router-dom. 
    This hook gives an object with details like the error code, error message, etc. We can display those informations in the UI to give more context to the users. */

    const errorLayout = (
        <div>
            <h1>Oops...</h1>
            <h2>Something Went Wrong!</h2>
            <h2>{"Code: " + status}</h2>
            <h2>{"Message: " + statusText}</h2>
        </div>
    );

    return errorLayout;
};

export default ErrorComponent;
