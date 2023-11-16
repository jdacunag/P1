import { Route, Switch } from 'wouter';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Register from './pages/Register';
import EditProject from './pages/EditProject';
import EditTask from './pages/EditTask';
import Tasks from './pages/Tasks';
import AddUser from './pages/AddUser';
import Statistics from './pages/statistics';

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
            <Route path="/projects/:projectId/edit/:taskId">
                <EditTask />
            </Route>
            <Route path="/projects/:projectId/:taskId/Create">
                <EditTask />
            </Route>
            <Route path='/projects/:projectId/Add'>
                    <AddUser/>
            </Route>
            <Route path='/projects/:projectId/Statistics'>
                <Statistics/>
            </Route>
            
        </Switch>
    );
}
