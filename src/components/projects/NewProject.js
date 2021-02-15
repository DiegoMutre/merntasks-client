import { useContext, useState } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";

const NewProject = () => {
    const {
        hasError,
        showForm,
        toggleForm,
        addProject,
        showError,
    } = useContext(ProjectContext);

    const [project, setProject] = useState({ name: "" });

    const handleChange = e => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // TODO: Show alert
        if (project.name.trim() === "") {
            showError();
            return;
        }

        addProject(project);
        setProject({ name: "" });
    };

    return (
        <>
            <button
                className="btn btn-block btn-primario"
                type="button"
                onClick={toggleForm}
            >
                New Project
            </button>
            {showForm && (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Project Name"
                        name="name"
                        value={project.name}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value="Add Project"
                        className="btn btn-primario btn-block"
                    />
                </form>
            )}
            {hasError && (
                <p className="mensaje error">The project name is required</p>
            )}
        </>
    );
};

export default NewProject;
