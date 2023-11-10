import React from 'react';
import { useSession } from '../../hooks/useSession';
import { useProject } from '../../hooks/useProject';
import { useEffect, useState } from 'react';
import { getAllTasks, createTask } from '../../api/task.api';
import Fondo from '../../components/generalidades/Fondo';
import Cuadro from '../../components/NuevoProyecto/Cuadro'; //e
import { useForm } from 'react-hook-form';
import BotonSiguiente from '../../components/generalidades/btnNext'; //s
import LoginUser from '../../components/Login/LoginUser'; //x
import { BotonUsuario } from '../../components/generalidades/btnCampo'; //z
import TaskCard from '../../components/generalidades/TaskCard';

function ProyectoPersonalizado() {
    const { userId } = useSession();
    const { ProjectId } = useProject();
    const [projects, setTasks] = useState([]);
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        async function loadProjects() {
            const res = await getAllTasks(ProjectId);
            setTasks(res.data);
            console.log(res.data);
        }

        loadProjects();
    }, []);
    const onSubmit = handleSubmit((data) => {
        data = Object.assign({}, data, { proyecto: ProjectId });
        console.log(data);
        createTask(data);
    });

    return (
        <div style={Fondo}>
            {projects.map((task) => (
                <TaskCard task={task} />
            ))}
            {/* Formulario de creación de tareas */}
            <div style={Cuadro}>
                <form onSubmit={onSubmit}>
                    <div style={{ ...BotonUsuario, top: '10%', transform: 'translate(360%, -30%)' }}>
                        <input
                            type="text"
                            placeholder="Nombre de la tarea"
                            name="nombre"
                            {...register('nombre', { required: true })}
                            style={{
                                LoginUser,
                                maxWidth: '500px',
                                width: '500vh',
                                fontSize: '25px',
                                borderRadius: '5px',
                                textAlign: 'center',
                            }}
                        />
                    </div>
                    <textarea
                        type="text"
                        placeholder="Descripción"
                        name="descripcion"
                        {...register('description', { required: true })}
                        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
                    ></textarea>
                    <input
                        type="datetime-local"
                        placeholder="Fecha de Vencimiento"
                        name="fecha_vencimento"
                        {...register('fecha_vencimiento', { required: true })}
                    />
                    <input type="text" placeholder="Slug" name="slug" {...register('slug', { required: true })} />
                    <input type="text" placeholder="Estado" name="estado" {...register('estado', { required: true })} />
                    <button style={{ ...BotonSiguiente }} type="submit">
                        Crear Tarea
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProyectoPersonalizado;
