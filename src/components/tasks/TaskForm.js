import { useContext } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";

const TaskForm = () => {
    const { project } = useContext(ProjectContext);

    if (!project) {
        return null;
    }

    const handleSubmit = e => {
        e.preventDefault();

        // TODO: Validate and add a new task
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
