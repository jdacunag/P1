/* eslint-disable react-hooks/rules-of-hooks */
import { faPlus, faUserPlus, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import useSession from '../hooks/useSession';
import * as tasksapi from '../services/tasks';
import * as projectApi from '../services/project';
import style from './Task.module.css';
import ColumnTask from '../components/ColumnTask';
import TaskhubLogo from '../images/TaskhubLogo.png';

export default function tasks() {
    const [location, setLocation] = useLocation();
    const [tasks, setTasks] = useState([]);
    const [project, setproject] = useState([]);
    const { userId } = useSession();

    const projectId = location.split('/').pop();
    useEffect(() => {
        if (!userId) {
            setLocation('/login');
            return;
        }

        (async () => {
            try {
                const TaskList = await tasksapi.getAll(projectId);
                const project = await projectApi.getByID(projectId);
                setproject(project);
                setTasks(TaskList);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, [userId, setLocation, projectId]);
    const handleCreate = async () => {
        const taskId = await tasksapi.createTask(projectId);
        setLocation(`/projects/${projectId}/${taskId}/create`);
    };
    const handleInvite = (e) => {
        e.stopPropagation();
        setLocation(`/projects/${projectId}/Add`);
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
    const handleOnClik = () => {
        setLocation(`/projects/${projectId}/Statistics/`);
    }
    return (
        <div>
            <header className={style.header}>
                <img src={project.img} className={style.img} />
                <p className={style.description}>
                    {project.descripcion}
                </p>
            </header>
            <div className={style.container}>
                <div className={style.sidebar}>
                    <button type="button" onClick={() => handleCreate()} className={style.button}>
                        <FontAwesomeIcon icon={faPlus} color="white" size="3x" />
                    </button>
                    <button type="button" className={style.button} onClick={(e) => handleInvite(e)}>
                        <FontAwesomeIcon icon={faUserPlus} color="white" size="3x" />
                    </button>
                    <button type="button" className={style.button} onClick={handleOnClik}>
                        <FontAwesomeIcon icon={faDatabase} color="white" size="3x" />
                    </button>
                </div>

                <div className={style.Column}>
                    <ColumnTask
                        tasks={tasks}
                        status="ToDo"
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    ></ColumnTask>
                </div>
                <div className={style.Column}>
                    <ColumnTask
                        tasks={tasks}
                        status="Doing"
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    ></ColumnTask>
                </div>
                <div className={style.Column}>
                    <ColumnTask
                        tasks={tasks}
                        status="Done"
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    ></ColumnTask>
                </div>
            </div>
        </div>
    );
}
