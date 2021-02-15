import { useContext } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import TaskContext from "../../context/Tasks/TaskContext";

const Task = ({ task }) => {
    const { deleteTask, getTasksById } = useContext(TaskContext);
    const { project } = useContext(ProjectContext);

    const handleDelete = () => {
        deleteTask(task.id);
        getTasksById(project[0].id);
    };

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? (
                    <button className="completo">Complete</button>
                ) : (
                    <button className="incompleto">Incomplete</button>
                )}
            </div>
            <div className="acciones">
                <button className="btn btn-primario">Edit</button>
                <button className="btn btn-secundario" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Task;
