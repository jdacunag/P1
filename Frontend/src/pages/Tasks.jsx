import { faFilePen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Card from '../components/Card';
import Title from '../components/title';
import useSession from '../hooks/useSession';
import * as tasksapi from '../services/tasks';
import style from './Task.module.css';
export default function tasks() {
    const [location, setLocation] = useLocation();
    const [tasks, setTasks] = useState([]);
    const { userId } = useSession();

    const projectId = location.split('/').pop();
    useEffect(() => {
        if (!userId) {
            setLocation('/login');
            return;
        }

        (async () => {
            try {
                const projectList = await tasksapi.getAll(projectId);
                setTasks(projectList);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, [userId, setLocation]);
    const  handleCreate = async () => {
        const taskId = await tasksapi.createProject(userId);
        //setLocation(`/projects/${projectId}/${taskId}/create`);
    };

    const handleEdit = (e, tasksId) => {
        e.stopPropagation();
        setLocation(`/projects/${projectId}/edit/${tasksId}`);
    };

    const handleDelete = async (e, tasksId) => {
        e.stopPropagation();
        try {
            setTasks((prev) => prev.filter((p) => p.id !== tasksId));
            await tasksapi.deleteById(tasksId);
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div className={style.container}>
            <Title white>Tasks </Title>
            <div>
                <button type="button" onClick={(e) => handleCreate()} className={style.button}>
                    <FontAwesomeIcon icon={faPlus} color="black" size="5x" />
                </button>
            </div>
            <div className={style.tasksContainer}>
            <div className={style.tasks}>
                {tasks.map((task) => (
                    <Card>
                        <div className={style.panel}>
                            <h3 className={style.title}>{task.nombre}</h3>

                            <p>{task.description}</p>
                            <p>{task.fecha_vencimento}</p>
                            <p>{task.estado}</p>
                            <p>{task.id}</p>
                        </div>
                        <div className={style.panel}>
                            <button type="button" onClick={(e) => handleEdit(e, task.id)} className={style.button}>
                                <FontAwesomeIcon icon={faFilePen} color="gray" size="xl" />
                            </button>
                            <button type="button" onClick={(e) => handleDelete(e, task.id)} className={style.button}>
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
