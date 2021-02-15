import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import ProjectState from "./context/Projects/ProjectState";
import TaskState from "./context/Tasks/TaskState";

function App() {
    return (
        <ProjectState>
            <TaskState>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route
                            exact
                            path="/new-account"
                            component={NewAccount}
                        />
                        <Route exact path="/projects" component={Projects} />
                    </Switch>
                </BrowserRouter>
            </TaskState>
        </ProjectState>
    );
}

export default App;
