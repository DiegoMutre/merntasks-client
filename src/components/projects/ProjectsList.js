import { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Project project={project} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ProjectsList;
