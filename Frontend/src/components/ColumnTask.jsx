import style from './ColumnTask.module.css';
import PropTypes from 'prop-types';
import Card from './Card';
import Title from './Title';
import { faFilePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ColumnTask({ tasks, status, handleEdit, handleDelete }) {
    return (
        <div className={style.column}>
            <Title white>{status}</Title>
            {tasks
                .filter((task) => task.estado === status)
                .map((task) => (
                    <Card key={task.id}>
                        <h2>{task.nombre}</h2>
                        <h3>{task.description}</h3>
                        <h3>{task.estado}</h3>
                        <button type="button" onClick={(e) => handleEdit(e, task.id)} className={style.button}>
                            <FontAwesomeIcon icon={faFilePen} color="gray" size="2x" />
                        </button>
                        <button type="button" onClick={(e) => handleDelete(e, task.id)} className={style.button}>
                            <FontAwesomeIcon icon={faTrashCan} color="red" size="2x" />
                        </button>
                    </Card>
                ))}
        </div>
    );
}

ColumnTask.propTypes = {
    tasks: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
