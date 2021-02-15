import NewProject from "../projects/NewProject";

const Sidebar = () => {
    return (
        <aside>
            <h1>
                MERN<span>Tasks</span>
            </h1>
            <div className="proyectos">
                <h2>Your Projects</h2>
                <NewProject />
            </div>
        </aside>
    );
};

export default Sidebar;
