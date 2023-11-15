import { faFilePen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Card from '../components/Card';
import Title from '../components/title';
import useSession from '../hooks/useSession';
import * as projectApi from '../services/project';
import style from './Projects.module.css';
import TaskhubLogo from '../images/TaskhubLogo.png';

export default function Projects() {
    const [, setLocation] = useLocation();
    
    const { userId } = useSession();
    const [projects, setProjects] = useState([]);
    const ps  = sessionStorage.getItem("userId");
    useEffect(() => {
        console.log(userId)
        if (!userId) {
            setLocation('/login');
            return;
        }
        (async () => {
            try {
                
                const projectList = await projectApi.getAll(ps);
                setProjects(projectList);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, [userId, setLocation, ps]);

    const handleClick = (e, projectId) => {
        e.stopPropagation();
        setLocation(`/projects/${projectId}`);
    };

    const handleCreate = async () => {
        const projectId = await projectApi.createProject(userId);
        setLocation(`/projects/${projectId}/create`);
    };

    const handleEdit = (e, projectId) => {
        e.stopPropagation();
        setLocation(`/projects/${projectId}/edit`);
    };

    const handleDelete = async (e, projectId) => {
        e.stopPropagation();

        try {
            setProjects((prev) => prev.filter((p) => p.id !== projectId));
            await projectApi.deleteById(projectId);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={style.container}>
            
            <Title white>Projects </Title>
            
            <div>
                <button type="button" onClick={() => handleCreate()} className={style.button}>
                    <FontAwesomeIcon icon={faPlus} color="black" size="5x" />
                </button>
            </div>
            <div >
             <img className={style.Logo} src={TaskhubLogo} />
            <div className={style.projects}>
                {projects.map((project) => (
                    <Card key={project.id} onClick={(e) => handleClick(e, project.id)}>
                        <img alt={`project-img-${project.id}`} src={project.img} className={style.banner} />
                        <div className={style.panel}>
                            <h3 className={style.title}>{project.nombre}</h3>
                            <button type="button" onClick={(e) => handleEdit(e, project.id)} className={style.button}>
                                <FontAwesomeIcon icon={faFilePen} color="gray" size="xl" />
                            </button>
                            <button type="button" onClick={(e) => handleDelete(e, project.id)} className={style.button}>
                                <FontAwesomeIcon icon={faTrashCan} color="red" size="x1" />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
            </div>
        </div>

    );
}
