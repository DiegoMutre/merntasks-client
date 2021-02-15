import { useContext } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import TaskContext from "../../context/Tasks/TaskContext";
import Task from "./Task";

const TasksList = () => {
    const { project, deleteProject } = useContext(ProjectContext);
    const { projectTasks } = useContext(TaskContext);

    if (!project) {
        return <h2>Select a Project</h2>;
    }
    const [currentProject] = project;

    const handleDelete = () => {
        deleteProject(currentProject.id);
    };

    return (
        <>
            <h2>Project: {currentProject.name}</h2>
            <ul className="listado-tareas">
                {projectTasks.length <= 0 ? (
                    <li className="tarea">
                        <p>There are no tasks to show</p>
                    </li>
                ) : (
                    projectTasks.map((task, i) => <Task key={i} task={task} />)
                )}
            </ul>
            <button className="btn btn-eliminar" onClick={handleDelete}>
                Delete Project &times;
            </button>
        </>
    );
};

export default TasksList;
