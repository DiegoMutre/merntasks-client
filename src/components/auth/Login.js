import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AlertContext } from "../../context/Alerts/AlertContext";
import { AuthContext } from "../../context/Auth/AuthContext";

const Login = () => {
    const { alert, showAlert } = useContext(AlertContext);
    const { msg, logIn } = useContext(AuthContext);

    const [user, setUser] = useState({ email: "", password: "" });

    const { email, password } = user;

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Validate
        if (Object.values(user).some(input => input.trim() === "")) {
            showAlert("All fields are required", "error");
            return;
        }

        // Pass to action
        logIn(user);
    };

    return (
        <div className="form-usuario">
            {alert && (
                <div className={`alerta alerta-${alert.category}`}>
                    {alert.msg}
                </div>
            )}

            <div className="contenedor-form sombra-dark">
                <h1>Log in</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            onChange={handleChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            onChange={handleChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Log in"
                        />
                    </div>
                </form>
                <Link to={"/new-account"} className="enlace-cuenta">
                    Get account
                </Link>
            </div>
        </div>
    );
};

export default Login;
