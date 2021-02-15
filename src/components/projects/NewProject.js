const NewProject = () => {
    return (
        <>
            <button className="btn btn-block btn-primario" type="button">
                New Project
            </button>
            <form className="formulario-nuevo-proyecto">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Project Name"
                    name="name"
                />
                <input
                    type="submit"
                    value="Add Project"
                    className="btn btn-primario btn-block"
                />
            </form>
        </>
    );
};

export default NewProject;
