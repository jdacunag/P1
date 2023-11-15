/* eslint-disable react-hooks/rules-of-hooks */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Title from '../components/title';
import useSession from '../hooks/useSession';
import * as tasksapi from '../services/tasks';
import style from './Task.module.css';
import ColumnTask from '../components/ColumnTask';

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
                console.log(projectId)
                const projectList = await tasksapi.getAll(projectId);
                setTasks(projectList);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, [userId, setLocation]);
    const  handleCreate = async () => {
        const taskId = await tasksapi.createTask(projectId);
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
            <Title white> Tasks </Title>
            <div>
                <button type="button" onClick={() => handleCreate()} className={style.button}>
                    <FontAwesomeIcon icon={faPlus} color="black" size="5x" />
                </button>
            </div>
            <div className={style.container}>
                <div className={style.Column}>
                <ColumnTask tasks={tasks} status='ToDo' handleEdit={handleEdit} handleDelete={handleDelete}></ColumnTask>
                </div>
                <div className={style.Column}>
                <ColumnTask tasks={tasks} status='Doing' handleEdit={handleEdit} handleDelete={handleDelete}></ColumnTask>
                </div>
                <div className={style.Column}>
                <ColumnTask tasks={tasks} status='Done' handleEdit={handleEdit} handleDelete={handleDelete}></ColumnTask>
                </div>
            </div>
            </div>
    );
}
