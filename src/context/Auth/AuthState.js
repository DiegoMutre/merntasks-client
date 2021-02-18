import { useReducer } from "react";
import axiosClient from "../../config/axios";
import setHeaderToken from "../../config/token";
import {
    GET_USER,
    LOGIN_ERROR,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESSFUL,
} from "../../types";
import { AuthContext } from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem("token"),
        authenticated: null,
        user: null,
        msg: null,
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const registerUser = async data => {
        try {
            const res = await axiosClient.post("/api/users", data);
            dispatch({
                type: REGISTRATION_SUCCESSFUL,
                payload: res.data,
            });
            getUserAuthenticated();
        } catch (error) {
            // Get error message
            const alert = error.response.data.msg;

            dispatch({
                type: REGISTRATION_ERROR,
                payload: {
                    msg: alert,
                    category: "error",
                },
            });
        }
    };

    const getUserAuthenticated = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            setHeaderToken(token);
        }

        try {
            const res = await axiosClient.get("/api/auth");
            dispatch({
                type: GET_USER,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
            });
        }
    };

    const logIn = async data => {
        try {
            const res = await axiosClient.post("/api/auth", data);
            console.log(res);
        } catch (error) {
            // Get error message
            const alert = error.response.data.msg;

            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    msg: alert,
                    category: "error",
                },
            });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg,
                registerUser,
                logIn,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
