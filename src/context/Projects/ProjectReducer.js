import {
    ADD_PROJECT,
    GET_CURRENT_PROJECT,
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
        case GET_CURRENT_PROJECT:
            return {
                ...state,
                project: state.projects.filter(
                    project => project.id === action.payload
                ),
            };
        default:
            return state;
    }
};

export default projectReducer;
