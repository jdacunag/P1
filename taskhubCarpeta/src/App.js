import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import TaskList from './components/TaskList';
import VerProyectos from './containers/pages/VerProyectos';
import NuevoProyecto from './containers/pages/NuevoProyecto';
import Login from './containers/pages/Login';
import Registro from './containers/pages/Registro';
import { UserIdProvider } from './hooks/useSession';

function App() {
    return (
        <UserIdProvider>
            <Router>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                    <Route path="/tasks" element={<TaskList />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/verproyectos" element={<VerProyectos />} />
                    <Route path="/nuevoproyecto" element={<NuevoProyecto />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            </Router>
        </UserIdProvider>
    );
}

export default App;
