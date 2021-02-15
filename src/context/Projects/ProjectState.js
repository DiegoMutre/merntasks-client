import { useReducer } from "react";
import ProjectContext from "./ProjectContext";
import projectReducer from "./ProjectReducer";

const ProjectState = props => {
    const initialState = {
        showForm: false,
    };

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    return (
        <ProjectContext.Provider
            value={{
                showForm: state.showForm,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectState;
