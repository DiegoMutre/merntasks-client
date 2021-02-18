import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import PrivateRoute from "./components/routes/PrivateRoute";
import setHeaderToken from "./config/token";
import AlertState from "./context/Alerts/AlertState";
import AuthState from "./context/Auth/AuthState";
import ProjectState from "./context/Projects/ProjectState";
import TaskState from "./context/Tasks/TaskState";

function App() {
    const token = localStorage.getItem("token");
    if (token) {
        setHeaderToken(token);
    }

    return (
        <ProjectState>
            <TaskState>
                <AlertState>
                    <AuthState>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={Login} />
                                <Route
                                    exact
                                    path="/new-account"
                                    component={NewAccount}
                                />
                                <PrivateRoute
                                    exact
                                    path="/projects"
                                    component={Projects}
                                />
                            </Switch>
                        </BrowserRouter>
                    </AuthState>
                </AlertState>
            </TaskState>
        </ProjectState>
    );
}

export default App;
