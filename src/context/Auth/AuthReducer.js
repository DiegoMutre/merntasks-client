import {
    GET_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESSFUL,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESSFUL,
    SIGN_OFF,
} from "../../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
        case REGISTRATION_SUCCESSFUL:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                authenticated: true,
                msg: null,
                loading: false,
            };
        case LOGIN_ERROR:
        case SIGN_OFF:
        case REGISTRATION_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                msg: action.payload,
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true,
                loading: false,
            };
        default:
            return state;
    }
};

export default AuthReducer;
