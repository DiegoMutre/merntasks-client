import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

const PrivateRoute = ({ component: Component, ...props }) => {
    const { authenticated, getUserAuthenticated, loading } = useContext(
        AuthContext
    );

    useEffect(() => {
        getUserAuthenticated();
    }, []);

    return (
        <Route
            {...props}
            render={props =>
                !authenticated && !loading ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;
