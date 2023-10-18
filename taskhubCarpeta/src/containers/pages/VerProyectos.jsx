import { useEffect, useState } from 'react';
import ReactImg from 'C:/Users/david/OneDrive/Escritorio/p1.v2/taskhubCarpeta/src/components/Home/Piramide.jpg';
import { getAllProjects } from '../../api/projects.api';
import { useSession } from '../../hooks/useSession';
import { useProject } from '../../hooks/useProject';
import Fondo from '../../components/generalidades/Fondo';
import CuadroProyectos from '../../components/proyectos/CuadroProyectos';
import { Link } from 'react-router-dom';
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup, 
} from '@coreui/react';


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
                        <CCard style={{ width: '12vh' }}>
                        <CCardImage orientation="top" src={ReactImg} />
                        <CCardBody>
                          <CCardTitle>{ Proyecto.nombre }</CCardTitle>
                          <CCardText>
                            { Proyecto.descripcion}
                          </CCardText>
                        </CCardBody>
                        <CListGroup flush>
                        </CListGroup>
                        <CCardBody>
                          <Link to={'/proyecto/'+Proyecto.id} onClick={ () => handleProjectClick(Proyecto.id)}>detalles</Link>
                        </CCardBody>
                      </CCard>
                ))}
            </div>
            </div>
        </div>
    );
}

export default VerProyectos;
