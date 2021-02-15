import {
    ADD_TASK,
    CHANGE_TASK_STATE,
    DELETE_TASK,
    GET_CURRENT_TASK,
    GET_TASKS_BY_ID,
    SHOW_TASK_ERROR,
} from "../../types";

const TaskReducer = (state, action) => {
    switch (action.type) {
        case GET_TASKS_BY_ID:
            return {
                ...state,
                projectTasks: state.tasks.filter(
                    task => task.projectId === action.payload
                ),
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
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
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        case CHANGE_TASK_STATE:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case GET_CURRENT_TASK:
            return {
                ...state,
                selectedTask: action.payload,
            };
        default:
            return state;
    }
};

export default TaskReducer;
