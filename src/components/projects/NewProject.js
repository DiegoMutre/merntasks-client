import { useContext, useState } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";

const NewProject = () => {
    const { showForm } = useContext(ProjectContext);

    const [project, setProject] = useState({ name: "" });

    const handleChange = e => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // TODO: Validate Form

        // TODO: Add to state

        // TODO: Reset form
    };

    return (
        <>
            <button className="btn btn-block btn-primario" type="button">
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
        </>
    );
};

export default NewProject;
