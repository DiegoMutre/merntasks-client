import { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/Projects/ProjectContext";
import TaskContext from "../../context/Tasks/TaskContext";

const TaskForm = () => {
    const [task, setTask] = useState({ name: "" });
    const { project } = useContext(ProjectContext);
    const {
        addTask,
        taskHasError,
        showTaskError,
        getTasksById,
        selectedTask,
        updateTask,
        cleanSelectedTask,
    } = useContext(TaskContext);

    useEffect(() => {
        if (selectedTask) {
            setTask(selectedTask);
        } else {
            setTask({ name: "" });
        }
    }, [selectedTask]);

    if (!project) {
        return null;
    }

    const handleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const [currentProject] = project;

    const handleSubmit = e => {
        e.preventDefault();

        if (task.name.trim() === "") {
            showTaskError();
            return;
        }

        if (selectedTask) {
            updateTask(task);
            cleanSelectedTask();
        } else {
            addTask({
                ...task,
                project_id: currentProject._id,
            });
        }

        getTasksById(currentProject._id);
        setTask({ name: "" });
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
                        value={task.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={selectedTask ? "Edit Task" : "Add Task"}
                    />
                </div>
            </form>
            {taskHasError && (
                <p className="mensaje error">
                    The name of the task is required
                </p>
            )}
        </div>
    );
};

export default TaskForm;
