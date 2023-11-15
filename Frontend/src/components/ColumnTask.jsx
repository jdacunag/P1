import style from './ColumnTask.module.css';
import PropTypes from 'prop-types';
import Card from './Card';
import Title from './title';
import Button from './Button';
import { faFilePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ColumnTask({ tasks, status, handleEdit, handleDelete }) {
    console.log(status)
    return (
        <div className={style.Column}>
            <div className={style.title}>
            <Title white>{status}</Title>
            </div>
            <div className={style.projects}>
                
                {tasks
                    
                    .filter((task) => task.estado === status)
                    .map((task) => (
                        
                        <Card key={task.id}>
                            <h1>{task.estado}</h1>
                                <h3>{task.id}</h3>
                                <h3>{task.nombre}</h3>
                                <h3>{task.estado}</h3>
                                <button type="button" onClick={(e) => handleEdit(e, task.id)} className={style.button}>
                                <FontAwesomeIcon icon={faFilePen} color="gray" size="xl" />
                            </button>
                            <button type="button" onClick={(e) => handleDelete(e, task.id)} className={style.button}>
                                <FontAwesomeIcon icon={faTrashCan} color="red" size="x1" />
                            </button>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

ColumnTask.propTypes = {
    tasks: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
