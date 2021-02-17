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

    // NOT FINISHED
    const registerUser = async data => {
        try {
            const res = await axiosClient.post("/api/users");
            console.log(res);
            dispatch({
                type: REGISTRATION_SUCCESSFUL,
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: REGISTRATION_ERROR,
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
