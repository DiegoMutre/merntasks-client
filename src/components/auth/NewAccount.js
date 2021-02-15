import { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
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

        // TODO: Validate

        // TODO: Minimum password 6 characters

        // TODO: The 2 password are the same

        // TODO: Pass to action
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Get an Account</h1>
                <form onSubmit={handleSubmit}>
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
