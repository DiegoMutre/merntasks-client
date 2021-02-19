import {
    ADD_TASK,
    CLEAN_SELECTED_TASK,
    DELETE_TASK,
    GET_CURRENT_TASK,
    GET_TASKS_BY_ID,
    SHOW_TASK_ERROR,
    UPDATE_TASK,
} from "../../types";

const TaskReducer = (state, action) => {
    switch (action.type) {
        case GET_TASKS_BY_ID:
            return {
                ...state,
                projectTasks: action.payload,
            };
        case ADD_TASK:
            return {
                ...state,
                projectTasks: [action.payload, ...state.projectTasks],
                taskHasError: false,
            };
        case SHOW_TASK_ERROR:
            return {
                ...state,
                taskHasError: true,
            };
        case DELETE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.filter(
                    task => task._id !== action.payload
                ),
            };
        case UPDATE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.map(task =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };
        case GET_CURRENT_TASK:
            return {
                ...state,
                selectedTask: action.payload,
            };
        case CLEAN_SELECTED_TASK:
            return {
                ...state,
                selectedTask: null,
            };
        default:
            return state;
    }
};

export default TaskReducer;
