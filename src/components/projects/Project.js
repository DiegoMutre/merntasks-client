import { useContext } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";

const Project = ({ project }) => {
    const { getCurrentProject } = useContext(ProjectContext);

    return (
        <li>
            <button
                className="btn btn-blank"
                onClick={() => getCurrentProject(project.id)}
            >
                {project.name}
            </button>
        </li>
    );
};

export default Project;
