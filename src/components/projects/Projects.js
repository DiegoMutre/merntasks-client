import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import Bar from "../layout/Bar";
import Sidebar from "../layout/Sidebar";
import TaskForm from "../tasks/TaskForm";
import TasksList from "../tasks/TasksList";

const Projects = () => {
    const { getUserAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        getUserAuthenticated();
    }, []);

    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Bar />
                <main>
                    <TaskForm />
                    <div className="contenedor-tareas">
                        <TasksList />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Projects;
