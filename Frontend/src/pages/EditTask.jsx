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
                <Input
                    type="file"
                    accept="image/png, image/jpeg"
                    placeholder="Project Image"
                    inputRef={imgRef}
                />
                <Button icon={faPenToSquare} submit>{title}</Button>
            </form>
        </Card>
    </div>
</div>
  )
}
