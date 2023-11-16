import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useLocation, useParams } from 'wouter';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/input';
import Title from '../components/title';
import * as taskapi from '../services/tasks';
import style from './EditProject.module.css';


export default function EditTask() {
    const { taskId } = useParams();
    const [location, setLocation] = useLocation();
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const estadoRef = useRef(null);
    const fechaFinRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ProjectId = location.split('/')[2];
        const title = nameRef.current?.value;
        const description = descriptionRef.current?.value;
        const estado = estadoRef.current?.value;
        const fechaFin = fechaFinRef.current?.value;
                await taskapi.editById(ProjectId, taskId, title, description, fechaFin, estado )
        setLocation(`/projects/${ProjectId}`);
    };

    const title = location.split('/').pop() === 'edit' ? 'Edit Task' : 'Create Task';
    

  return (
    <div className={style.container}>
    <div className={style.card}>
        <Card>
            <div className={style.title}>
                <Title>{title}</Title>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <Input type="text" placeholder="Name" focus inputRef={nameRef} />
                <Input type="textarea" placeholder="Description" inputRef={descriptionRef} />
                <Input type="select" placeholder="State" inputRef={estadoRef} />
                <Input type="date" placeholder="State" inputRef={fechaFinRef} />
                <Button icon={faPenToSquare} submit>
                    {title}
                </Button>
            </form>
        </Card>
    </div>
</div>
  );
}
