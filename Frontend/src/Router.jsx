import { Route, Switch } from 'wouter';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Register from './pages/Register';
import EditProject from './pages/EditProject';
import EditTask from './pages/EditTask';
import Tasks from './pages/tasks';

export default function Router() {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/projects/:projectId">
                <Tasks />
            </Route>
            <Route path="/projects/:projectId/create">
                <EditProject />
            </Route>
            <Route path="/projects/:projectId/edit">
                <EditProject />
            </Route>
            <Route path="/projects/:projectId/:taskId">
                <EditTask />
            </Route>
            <Route path="/projects/:projectId/edit/:taskId">
                <EditTask />
            </Route>
        </Switch>
    );
}
