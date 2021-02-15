const Task = ({ task }) => {
    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? (
                    <button className="completo">Complete</button>
                ) : (
                    <button className="incompleto">Incomplete</button>
                )}
            </div>
            <div className="acciones">
                <button className="btn btn-primario">Edit</button>
                <button className="btn btn-secundario">Delete</button>
            </div>
        </li>
    );
};

export default Task;
