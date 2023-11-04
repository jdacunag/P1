import { useEffect, useState } from 'react';
import React  from 'react';
import { getAllProjects } from '../../api/projects.api';
import { useSession } from '../../hooks/useSession';
import { useProject } from '../../hooks/useProject';
import Fondo from '../../components/generalidades/Fondo';
import CuadroProyectos from '../../components/proyectos/CuadroProyectos';
import { Link } from 'react-router-dom';



function VerProyectos() {
    
    const { userId } = useSession();
    const { ProjectId, setSecureId } = useProject();
    const handleProjectClick = (id) => {
        setSecureId(id);
      }
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
                              <div
                              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                              style={{width: '25%'}}>
                              <a href="#!">
                                <img
                                  className="rounded-t-lg"
                                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                                  alt="" 
                                  />
                              </a>
                              <div className="p-1">
                                <h4
                                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                      {Proyecto.nombre}
                                </h4>
                                <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200" style={{fontSize : '15px'}}>
                                      {Proyecto.descripcion}
                                </p>
                                <Link className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal 
                                text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
                                  0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                                  dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                                  dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                 to={'/proyecto/'+Proyecto.id} onClick={ () => handleProjectClick(Proyecto.id)}>detalles</Link>    
                              </div>
                            </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default VerProyectos;
