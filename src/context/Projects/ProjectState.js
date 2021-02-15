import { useReducer } from "react";
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT } from "../../types";
import ProjectContext from "./ProjectContext";
import projectReducer from "./ProjectReducer";
import { v4 } from "uuid";

const fakeProjects = [
    { id: 1, name: "Online shop" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "To do homework" },
];

const ProjectState = props => {
    const initialState = {
        projects: [],
        showForm: false,
    };

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    const toggleForm = () => {
        dispatch({
            type: PROJECT_FORM,
        });
    };

    // 'projects' param will be used after
    const getProjects = (projects = []) => {
        dispatch({ type: GET_PROJECTS, payload: fakeProjects });
    };

    const addProject = (project = {}) => {
        dispatch({
            type: ADD_PROJECT,
            payload: { ...project, id: v4() },
        });
    };

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                showForm: state.showForm,
                toggleForm,
                getProjects,
                addProject,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectState;
