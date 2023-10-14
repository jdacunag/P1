import { useEffect, useState } from 'react';
import ProjectsCard from '../../components/generalidades/ProjectsCard';
import { getAllProjects } from '../../api/projects.api';
import { useSession } from '../../hooks/useSession';
import Fondo from '../../components/generalidades/Fondo';

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
            <div style={containerStyle}>
                {projects.map((Proyecto) => (
                    <ProjectsCard key={Proyecto.id} Proyecto={Proyecto} />
                ))}
            </div>
        </div>
    );
}

export default VerProyectos;
