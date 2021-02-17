import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AlertContext } from "../../context/Alerts/AlertContext";

const NewAccount = () => {
    const { alert, showAlert } = useContext(AlertContext);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });

    const { name, email, password, confirm } = user;

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Check for empty strings
        if (Object.values(user).some(input => input.trim() === "")) {
            showAlert("All fields are required", "error");
            return;
        }

        // Check for minimum password 6 characters
        if (password.length < 6) {
            showAlert(
                "The password must be at least 6 characters long",
                "error"
            );
            return;
        }

        // The 2 password are the same
        if (password !== confirm) {
            showAlert("Passwords do not match", "error");
            return;
        }

        // TODO: Pass to action
    };

    return (
        <div className="form-usuario">
            {alert && (
                <div className={`alerta alerta-${alert.category}`}>
                    {alert.msg}
                </div>
            )}
            <div className="contenedor-form sombra-dark">
                <h1>Get an Account</h1>
                <form onSubmit={handleSubmit} noValidate={true}>
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            onChange={handleChange}
                            value={name}
                        />
                    </div>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repeat your password"
                            onChange={handleChange}
                            value={confirm}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Sign up"
                        />
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    Return to Log in
                </Link>
            </div>
        </div>
    );
};

export default NewAccount;
