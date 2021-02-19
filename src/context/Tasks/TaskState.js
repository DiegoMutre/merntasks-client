import { useReducer } from "react";
import axiosClient from "../../config/axios";
import {
    ADD_TASK,
    CHANGE_TASK_STATE,
    DELETE_TASK,
    GET_TASKS_BY_ID,
    SHOW_TASK_ERROR,
    GET_CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_SELECTED_TASK,
} from "../../types";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

const TaskState = props => {
    const initialState = {
        tasks: [],
        projectTasks: [],
        taskHasError: false,
        selectedTask: null,
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksById = async project_id => {
        try {
            const res = await axiosClient.get("/api/tasks", {
                params: { project_id },
            });
            dispatch({
                type: GET_TASKS_BY_ID,
                payload: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const addTask = async task => {
        try {
            const res = await axiosClient.post("/api/tasks", task);
            dispatch({
                type: ADD_TASK,
                payload: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const showTaskError = () => {
        dispatch({
            type: SHOW_TASK_ERROR,
        });
    };

    const deleteTask = async (id, project_id) => {
        try {
            await axiosClient.delete(`/api/tasks/${id}`, {
                params: { project_id },
            });
            dispatch({
                type: DELETE_TASK,
                payload: id,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const changeTaskState = task => {
        dispatch({
            type: CHANGE_TASK_STATE,
            payload: task,
        });
    };

    const getCurrentTask = task => {
        dispatch({
            type: GET_CURRENT_TASK,
            payload: task,
        });
    };

    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task,
        });
    };

    const cleanSelectedTask = () => {
        dispatch({
            type: CLEAN_SELECTED_TASK,
        });
    };

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskHasError: state.taskHasError,
                selectedTask: state.selectedTask,
                getTasksById,
                addTask,
                showTaskError,
                deleteTask,
                changeTaskState,
                getCurrentTask,
                updateTask,
                cleanSelectedTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;
