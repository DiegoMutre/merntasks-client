import { useContext, useEffect } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import Project from "./Project";

const ProjectsList = () => {
    const { projects, getProjects } = useContext(ProjectContext);

    useEffect(() => {
        getProjects();
    }, []);

    if (!projects.length) {
        return <p>There are no projects, start by creating one</p>;
    }
    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </ul>
    );
};

export default ProjectsList;
