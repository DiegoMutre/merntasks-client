import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

const PrivateRoute = ({ component: Component, ...props }) => {
    const { authenticated } = useContext(AuthContext);

    return (
        <Route
            {...props}
            render={props =>
                !authenticated ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
};

export default PrivateRoute;
