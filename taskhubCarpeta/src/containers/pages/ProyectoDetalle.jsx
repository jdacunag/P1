import React from 'react'
import { useSession } from '../../hooks/useSession';
import { useProject } from '../../hooks/useProject';
import { useEffect, useState } from 'react';
import { getAllTasks } from '../../api/task.api';
import Fondo from '../../components/generalidades/Fondo';
import Taskcard from '../../components/Taskcard';
function ProyectoPersonalizado() {
  const { userId } = useSession();
  const { ProjectId } = useProject();
  const [projects, setTasks] = useState([]);
  useEffect(() => {
      async function loadProjects() {
          const res = await getAllTasks(ProjectId);
          setTasks(res.data);
          console.log(res.data);
      }
     
      loadProjects();
  }, []);
  return (
    <div style={Fondo}>
           {projects.map((Proyecto) => (

                          <Taskcard  key={Proyecto.id} task={Proyecto}/>

                ))}
    </div>
  )
}

export default ProyectoPersonalizado