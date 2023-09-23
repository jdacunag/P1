import { useEffect, useState } from 'react';
import { ProjectsCard } from '../../components/proyectos/ProjectsCard';
import { getAllProjects } from '../../api/projects.api';
import { useSession } from '../../hooks/useSession';


function VerProyectos() {
    const { userId } = useSession();
    const [projects, setTasks] = useState([]);
    console.log(userId)
    useEffect(() => {
        async function loadProjects() {
            const res = await getAllProjects(userId);
            setTasks(res.data);
        }
        loadProjects();
    }, []);

    return (
        <div>
            {projects.map(
                (Proyecto) => (console.log(Proyecto.nombre), (<ProjectsCard key={Proyecto.id} Proyecto={Proyecto} />)),
            )}
        </div>
    );
}

export default VerProyectos;
