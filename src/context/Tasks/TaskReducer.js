import { GET_TASKS_BY_ID } from "../../types";

const TaskReducer = (state, action) => {
    switch (action.type) {
        case GET_TASKS_BY_ID:
            return {
                ...state,
                projectTasks: state.tasks.filter(
                    task => task.projectId === action.payload
                ),
            };

        default:
            return state;
    }
};

export default TaskReducer;
