import { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: "Choose platform", state: true, projectId: 3 },
            { name: "Choose colors 3", state: false, projectId: 3 },
            { name: "Choose Hosting 3", state: false, projectId: 3 },
            { name: "Choose Typography", state: false, projectId: 3 },
            { name: "Choose platform", state: true, projectId: 1 },
            { name: "Choose colors 1", state: false, projectId: 1 },
            { name: "Choose Hosting 1", state: false, projectId: 1 },
            { name: "Choose Typography", state: false, projectId: 1 },
            { name: "Choose platform", state: true, projectId: 2 },
            { name: "Choose colors 2", state: false, projectId: 2 },
            { name: "Choose Hosting 2", state: false, projectId: 2 },
            { name: "Choose Typography", state: false, projectId: 2 },
        ],
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;