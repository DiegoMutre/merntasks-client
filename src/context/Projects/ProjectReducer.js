import { GET_PROJECTS, PROJECT_FORM } from "../../types";

const projectReducer = (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return { ...state, showForm: !state.showForm };
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        default:
            return state;
    }
};

export default projectReducer;
