import { useContext } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import TaskContext from "../../context/Tasks/TaskContext";

const Project = ({ project }) => {
    const { getCurrentProject } = useContext(ProjectContext);
    const { getTasksById } = useContext(TaskContext);

    const handleClick = () => {
        getCurrentProject(project._id);
        getTasksById(project._id);
    };

    return (
        <li>
            <button className="btn btn-blank" onClick={handleClick}>
                {project.name}
            </button>
        </li>
    );
};

export default Project;
