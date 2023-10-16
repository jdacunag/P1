import { useEffect, useState } from 'react';
import { getAllProjects } from '../../api/projects.api';
import { useSession } from '../../hooks/useSession';
import Fondo from '../../components/generalidades/Fondo';
import  Carda  from '../../components/proyectos/card'
import CuadroProyectos from '../../components/proyectos/CuadroProyectos';

function VerProyectos() {
    const { userId } = useSession();
    const [projects, setTasks] = useState([]);
    useEffect(() => {
        async function loadProjects() {
            const res = await getAllProjects(userId);
            setTasks(res.data);
        }
        loadProjects();
    }, []);

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <div style={Fondo}>
            <div style={CuadroProyectos}>
            <div style={containerStyle}>
                {projects.map((Proyecto) => (
                    <Carda key={Proyecto.id} Proyecto={Proyecto} />
                ))}
            </div>
            </div>
        </div>
    );
}

export default VerProyectos;
