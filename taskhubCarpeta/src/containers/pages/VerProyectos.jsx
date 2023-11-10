import { useEffect, useState } from 'react';
import React from 'react';
import { getAllProjects } from '../../api/projects.api';
import { useSession } from '../../hooks/useSession';
import Fondo from '../../components/generalidades/Fondo';
import CuadroProyectos from '../../components/proyectos/CuadroProyectos';
import ProjectsCard from '../../components/generalidades/ProjectsCard';

function VerProyectos() {
    const { userId } = useSession();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
     (async () => { 
        const data = await getAllProjects(userId);
        setProjects(data);
     })()
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
                        <ProjectsCard Proyecto={Proyecto} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VerProyectos;
