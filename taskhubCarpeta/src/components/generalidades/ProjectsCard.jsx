import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import { useProject } from '../../hooks/useProject';
import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { deleteProject } from '../../api/projects.api';
import axios from 'axios';

function ProjectsCard({ Proyecto }) {
    const { userId } = useSession();
    const { ProjectId, setSecureId } = useProject();
    const handleProjectClick = (id) => {
        try {
            setSecureId(id);
        } catch (error) {}
    };
    const handleOnDelete = (id) => {
        deleteProject(id);
    };
    const handleOnedit = (id) => {};
    if (Proyecto === null) {
        return null;
    }

    return (
        <div
            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            style={{ width: '25%' }}
        >
            <img className="rounded-t-lg" src={Proyecto.img} alt="" />
            <div className="p-1">
                <h4 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {Proyecto.nombre}
                </h4>
                <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200" style={{ fontSize: '15px' }}>
                    {Proyecto.descripcion}
                </p>

                <Link
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal 
          text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
            0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    to={'/proyecto/' + Proyecto.id}
                    onClick={() => handleProjectClick(Proyecto.id)}
                >
                    detalles
                </Link>
            </div>
            <div style={{ display: 'flex' }}>
                <button type="button" onClick={() => handleOnDelete(Proyecto.id)}>
                    <TrashIcon style={{ width: '4.1vh', height: '3.2vh' }} />
                </button>
                <button type="button" onClick={() => handleOnedit()}>
                    <PencilSquareIcon style={{ width: '4.1vh', height: '3.2vh' }} />
                </button>
            </div>
        </div>
    );
}

export default ProjectsCard;
