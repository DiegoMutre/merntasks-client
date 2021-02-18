import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Bar = () => {
    const { user, getUserAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        getUserAuthenticated();
    }, []);

    return (
        <header className="app-header">
            {user && (
                <p className="nombre-usuario">
                    Hi <span>{user.name}</span>
                </p>
            )}
            <nav className="nav-principal">
                <a href="#!">Sign off</a>
            </nav>
        </header>
    );
};

export default Bar;
