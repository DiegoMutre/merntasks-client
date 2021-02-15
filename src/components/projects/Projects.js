import Bar from "../layout/Bar";
import Sidebar from "../layout/Sidebar";

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Bar />
                <main>
                    <div className="contendor-tareas"></div>
                </main>
            </div>
        </div>
    );
};

export default Projects;
