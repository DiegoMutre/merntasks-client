import { PROJECT_FORM } from "../../types";

const projectReducer = (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return { ...state, showForm: !state.showForm };
        default:
            return state;
    }
};

export default projectReducer;
