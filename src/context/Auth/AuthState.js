import { useReducer } from "react";
import axiosClient from "../../config/axios";
import { REGISTRATION_ERROR, REGISTRATION_SUCCESSFUL } from "../../types";
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
            console.log(res);
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
