import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
        deleteProject(currentProject._id);
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
                    <TransitionGroup>
                        {projectTasks.map(task => (
                            <CSSTransition
                                key={task._id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Task task={task} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </ul>
            <button className="btn btn-eliminar" onClick={handleDelete}>
                Delete Project &times;
            </button>
        </>
    );
};

export default TasksList;
