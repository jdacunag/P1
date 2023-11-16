import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useLocation, useParams } from 'wouter';
import Card from '../components/Card';
import Button from '../components/button';
import Input from '../components/input';
import Title from '../components/title';
import * as projectApi from '../services/project';
import style from './EditProject.module.css';
import useSession from '../hooks/useSession';

export default function EditTask() {
    const { userId } = useSession();
    const { ProjectId } = useParams();
    const { taskId } = useParams();
    const [location, setLocation] = useLocation();
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const estadoRef = useRef(null);
    const fechaFin = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = nameRef.current?.value;
        const description = descriptionRef.current?.value;
        const file = imgRef.current?.files[0];
        const reader = new FileReader();

        reader.onloadend = async () => {
            const image = reader.result;
            
            try {
                await projectApi.editById(taskId, title, description, image, userId, ProjectId);
                setLocation('/tasks');
            } catch (error) {
                alert(error.message);
            }
        };

        if (file) reader.readAsDataURL(file);
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
                <Input type="text" placeholder="State" inputRef={estadoRef} />
                <Input type="date" placeholder="State" inputRef={fechaFin} />
               
                <Button icon={faPenToSquare} submit>
                    {title}
                </Button>
            </form>
        </Card>
    </div>
</div>
  );
}
