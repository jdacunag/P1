import React from 'react'
import { useSession } from '../../hooks/useSession';
import { useProject } from '../../hooks/useProject';
import { useEffect, useState } from 'react';
import { getAllTasks,createTask } from '../../api/task.api';
import Fondo from '../../components/generalidades/Fondo';
import Taskcard from '../../components/Taskcard';
import { useForm } from 'react-hook-form';


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
           {projects.map((Proyecto) => (

                          <Taskcard  key={Proyecto.id} task={Proyecto}/>
                  
                ))}
          {/* Formulario de creación de tareas */}
          <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nombre de la tarea" name="nombre"
                  {...register('nombre', { required: true })}        
        />
        <textarea 
        type="text" placeholder="descripcion" name="descripcion"
        {...register('description', { required: true })}     ></textarea>
        <input type="datetime-local" placeholder="Fecha de Vencimiento" name="fecha_vencimento" 
        {...register('fecha_vencimiento', { required: true })}/>
        <input type="text" placeholder="Slug" name="slug" 
        {...register('slug', { required: true })}/>
        <input type="text" placeholder="Estado" name="estado"
        {...register('estado', { required: true })} />
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  )
}

export default ProyectoPersonalizado