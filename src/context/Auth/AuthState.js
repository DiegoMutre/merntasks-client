import { useReducer } from "react";
import axiosClient from "../../config/axios";
import {
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
            getUserAuthenticated();
            dispatch({
                type: REGISTRATION_SUCCESSFUL,
                payload: res.data,
            });
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
            // TODO: Send token through the header
        }

        try {
            const res = await axiosClient.get("/api/auth");
            console.log(res);
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
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
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
