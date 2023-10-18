import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import TaskList from './components/TaskList';
import VerProyectos from './containers/pages/VerProyectos';
import NuevoProyecto from './containers/pages/NuevoProyecto';
import Login from './containers/pages/Login';
import Registro from './containers/pages/Registro';
import { UserIdProvider } from './hooks/useSession';
import { ProjectIdProvider } from './hooks/useProject';
import ProyectoDetalle from './containers/pages/ProyectoDetalle';

function App() {
    return (
        <UserIdProvider>
            <ProjectIdProvider>
            <Router>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                    <Route path="/tasks" element={<TaskList />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/nuevoproyecto" element={<NuevoProyecto />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/verproyectos" element={<VerProyectos />} />
                    <Route path='/proyecto/:id' element={<ProyectoDetalle />} />
                </Routes>
            </Router>
            </ProjectIdProvider>
        </UserIdProvider>
    );
}

export default App;
