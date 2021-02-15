import Project from "./Project";

const ProjectsList = () => {
    // This is just for testing
    const projects = [
        { name: "Online shop" },
        { name: "Web Design" },
        { name: "To do homework" },
    ];

    return (
        <ul className="listado-proyectos">
            {projects.map((project, i) => (
                <Project key={i} project={project} />
            ))}
        </ul>
    );
};

export default ProjectsList;
