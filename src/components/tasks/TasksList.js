import Task from "./Task";

const TasksList = () => {
    // This is just for testing
    const projectTasks = [
        { name: "Choose platform", state: true },
        { name: "Choose colors", state: false },
        { name: "Choose Hosting", state: false },
        { name: "Choose Typography", state: false },
    ];

    return (
        <>
            <h2>Project: Online Shop</h2>
            <ul className="listado-tareas">
                {projectTasks.length <= 0 ? (
                    <li className="tarea">
                        <p>There are no tasks to show</p>
                    </li>
                ) : (
                    projectTasks.map((task, i) => <Task key={i} task={task} />)
                )}
            </ul>
        </>
    );
};

export default TasksList;
