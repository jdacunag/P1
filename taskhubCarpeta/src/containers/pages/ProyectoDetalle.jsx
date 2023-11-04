import React from 'react'
import { useSession } from '../../hooks/useSession';
import { useProject } from '../../hooks/useProject';
import { useEffect, useState } from 'react';
import { getAllTasks,createTask } from '../../api/task.api';
import Fondo from '../../components/generalidades/Fondo';
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
           {projects.map((task) => (

                              <div class="flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-4 rounded-xl text-white w-8/12 mx-auto my-auto">
                                  <div>
                                      <span class="text-xs">{task.nombre}</span>
                                  </div>
                                  <div>
                                      <p class="text-xl font-bold mt-3 mb-5">{task.description}</p>
                                  </div>
                          
                                  <div class="mb-10 relative">
                                      <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute"/>
                                      <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute left-5"/>
                                      <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute left-10"/>
                                      <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute left-14"/>
                                  </div>
                                  <div class="text-xs mb-2">
                                      5/12 Task Completed
                                  </div>
                                  <div class="w-full bg-gray-400 p-0">
                                      <div class="w-1/12 bg-white h-1">
                          
                                      </div>
                                  </div>
                              </div>


                  
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