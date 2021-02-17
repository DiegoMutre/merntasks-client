import {
    GET_USER,
    LOGIN_ERROR,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESSFUL,
} from "../../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESSFUL:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                authenticated: true,
                msg: null,
            };
        case LOGIN_ERROR:
        case REGISTRATION_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                msg: action.payload,
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default AuthReducer;
