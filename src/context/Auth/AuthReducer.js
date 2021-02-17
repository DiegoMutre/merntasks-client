import { REGISTRATION_ERROR, REGISTRATION_SUCCESSFUL } from "../../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESSFUL:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                authenticated: true,
                msg: null,
            };
        case REGISTRATION_ERROR:
            return {
                ...state,
                token: null,
                msg: action.payload,
            };
        default:
            return state;
    }
};

export default AuthReducer;
