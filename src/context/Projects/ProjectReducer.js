import {
    ADD_PROJECT,
    GET_PROJECTS,
    PROJECT_FORM,
    SHOW_ERROR,
} from "../../types";

const projectReducer = (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return { ...state, showForm: !state.showForm };
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                showForm: false,
                hasError: false,
            };
        case SHOW_ERROR:
            return {
                ...state,
                hasError: true,
            };
        default:
            return state;
    }
};

export default projectReducer;
