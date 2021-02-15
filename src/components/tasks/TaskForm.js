import { useContext, useState } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import TaskContext from "../../context/Tasks/TaskContext";

const TaskForm = () => {
    const [task, setTask] = useState({ name: "" });
    const { project } = useContext(ProjectContext);
    const { addTask } = useContext(TaskContext);

    if (!project) {
        return null;
    }

    const handleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const [currentProject] = project;

    const handleSubmit = e => {
        e.preventDefault();

        // TODO: Validate
        addTask({ ...task, projectId: currentProject.id, state: false });
    };

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        name="name"
                        placeholder="Task Name"
                        value={task.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
