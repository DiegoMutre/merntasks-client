import { useContext } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import TaskContext from "../../context/Tasks/TaskContext";

const Task = ({ task }) => {
    const {
        deleteTask,
        getTasksById,
        changeTaskState,
        getCurrentTask,
    } = useContext(TaskContext);
    const { project } = useContext(ProjectContext);

    const handleDelete = () => {
        deleteTask(task._id, project[0]._id);
        getTasksById(project[0]._id);
    };

    const handleClick = () => {
        if (task.state) {
            task.state = false;
        } else {
            task.state = true;
        }
        changeTaskState(task);
    };

    const handleEdit = () => {
        getCurrentTask(task);
    };

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? (
                    <button className="completo" onClick={handleClick}>
                        Complete
                    </button>
                ) : (
                    <button className="incompleto" onClick={handleClick}>
                        Incomplete
                    </button>
                )}
            </div>
            <div className="acciones">
                <button className="btn btn-primario" onClick={handleEdit}>
                    Edit
                </button>
                <button className="btn btn-secundario" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Task;
