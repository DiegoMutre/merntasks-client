import { useContext } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import Task from "./Task";

const TasksList = () => {
    const { project, deleteProject } = useContext(ProjectContext);

    if (!project) {
        return <h2>Select a Project</h2>;
    }
    const [currentProject] = project;

    // This is just for testing
    const projectTasks = [
        { name: "Choose platform", state: true },
        { name: "Choose colors", state: false },
        { name: "Choose Hosting", state: false },
        { name: "Choose Typography", state: false },
    ];

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
