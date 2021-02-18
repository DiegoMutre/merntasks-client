import { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AlertContext } from "../../context/Alerts/AlertContext";
import ProjectContext from "../../context/Projects/ProjectContext";
import Project from "./Project";

const ProjectsList = () => {
    const { projects, msg, getProjects } = useContext(ProjectContext);
    const { alert, showAlert } = useContext(AlertContext);

    useEffect(() => {
        getProjects();

        // If there is an error
        if (msg) {
            showAlert(msg.msg, msg.category);
        }
    }, [msg]);

    if (!projects.length) {
        return <p>There are no projects, start by creating one</p>;
    }
    return (
        <ul className="listado-proyectos">
            {alert && (
                <div className={`alerta alerta-${alert.category}`}>
                    {alert.msg}
                </div>
            )}
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
