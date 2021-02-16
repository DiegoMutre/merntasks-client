import { useReducer } from "react";
import {
    ADD_TASK,
    CHANGE_TASK_STATE,
    DELETE_TASK,
    GET_TASKS_BY_ID,
    SHOW_TASK_ERROR,
    GET_CURRENT_TASK,
} from "../../types";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 0, name: "Choose platform", state: true, projectId: 3 },
            { id: 1, name: "Choose colors 3", state: false, projectId: 3 },
            { id: 2, name: "Choose Hosting 3", state: false, projectId: 3 },
            { id: 3, name: "Choose Typography", state: false, projectId: 3 },
            { id: 4, name: "Choose platform", state: true, projectId: 1 },
            { id: 5, name: "Choose colors 1", state: false, projectId: 1 },
            { id: 6, name: "Choose Hosting 1", state: false, projectId: 1 },
            { id: 7, name: "Choose Typography", state: false, projectId: 1 },
            { id: 8, name: "Choose platform", state: true, projectId: 2 },
            { id: 9, name: "Choose colors 2", state: false, projectId: 2 },
            { id: 10, name: "Choose Hosting 2", state: false, projectId: 2 },
            { id: 11, name: "Choose Typography", state: false, projectId: 2 },
        ],
        projectTasks: null,
        taskHasError: false,
        selectedTask: null,
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksById = projectId => {
        dispatch({
            type: GET_TASKS_BY_ID,
            payload: projectId,
        });
    };

    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task,
        });
    };

    const showTaskError = () => {
        dispatch({
            type: SHOW_TASK_ERROR,
        });
    };

    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id,
        });
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
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;
