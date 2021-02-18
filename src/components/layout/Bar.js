import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Bar = () => {
    const { user, getUserAuthenticated, logOut } = useContext(AuthContext);

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
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => logOut()}
                >
                    Log out
                </button>
            </nav>
        </header>
    );
};

export default Bar;
