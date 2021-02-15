import { useReducer } from "react";
import { PROJECT_FORM } from "../../types";
import ProjectContext from "./ProjectContext";
import projectReducer from "./ProjectReducer";

const ProjectState = props => {
    const initialState = {
        showForm: false,
    };

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    const toggleForm = () => {
        dispatch({
            type: PROJECT_FORM,
        });
    };

    return (
        <ProjectContext.Provider
            value={{
                showForm: state.showForm,
                toggleForm,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectState;
