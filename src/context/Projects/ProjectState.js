import { useReducer } from "react";
import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    SHOW_ERROR,
    GET_CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR,
} from "../../types";
import ProjectContext from "./ProjectContext";
import projectReducer from "./ProjectReducer";
import axiosClient from "../../config/axios";

const ProjectState = props => {
    const initialState = {
        projects: [],
        showForm: false,
        hasError: false,
        project: null,
        msg: null,
    };

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    const toggleForm = () => {
        dispatch({
            type: PROJECT_FORM,
        });
    };

    const getProjects = async () => {
        try {
            const res = await axiosClient.get("/api/projects");
            dispatch({
                type: GET_PROJECTS,
                payload: res.data,
            });
        } catch (error) {
            const alert = {
                msg: "An error has occurred",
                category: "error",
            };
            dispatch({
                type: PROJECT_ERROR,
                payload: alert,
            });
        }
    };

    const addProject = async (project = {}) => {
        try {
            const res = await axiosClient.post("/api/projects", project);
            dispatch({
                type: ADD_PROJECT,
                payload: res.data,
            });
        } catch (error) {
            const alert = {
                msg: "An error has occurred",
                category: "error",
            };
            dispatch({
                type: PROJECT_ERROR,
                payload: alert,
            });
        }
    };

    const showError = () => {
        dispatch({
            type: SHOW_ERROR,
        });
    };

    const getCurrentProject = projectId => {
        dispatch({
            type: GET_CURRENT_PROJECT,
            payload: projectId,
        });
    };

    const deleteProject = async projectId => {
        try {
            await axiosClient.delete(`/api/projects/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId,
            });
        } catch (error) {
            const alert = {
                msg: "An error has occurred",
                category: "error",
            };
            dispatch({
                type: PROJECT_ERROR,
                payload: alert,
            });
        }
    };

    return (
        <ProjectContext.Provider
            value={{
                project: state.project,
                projects: state.projects,
                showForm: state.showForm,
                hasError: state.hasError,
                msg: state.msg,
                toggleForm,
                getProjects,
                addProject,
                showError,
                getCurrentProject,
                deleteProject,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectState;
