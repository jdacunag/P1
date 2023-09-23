import { useEffect, useState } from 'react';
import { ProjectsCard } from '../../components/proyectos/ProjectsCard';
import { getAllProjects } from '../../api/projects.api';

function obtenerCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === nombre) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function VerProyectos() {
    const [projects, setTasks] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const id = obtenerCookie('id');
            console.log(id);
            const res = await getAllProjects(id);
            setTasks(res.data);
        }
        loadProjects();
    }, []);

    return (
        <div>
            <p> hola </p>
            {projects.map(
                (Proyecto) => (console.log(Proyecto.nombre), (<ProjectsCard key={Proyecto.id} Proyecto={Proyecto} />)),
            )}
        </div>
    );
}

export default VerProyectos;
