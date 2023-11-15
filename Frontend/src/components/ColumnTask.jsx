import style from "./ColumnTask.module.css"
import PropTypes from 'prop-types';
import Card from "./Card";
import Title from "./title";

export default function ColumnTask({ tasks, status, }) {
    <div className= {style.Column}>
        <Title white>{status}</Title>

    
    </div>
}

ColumnTask.propTypes = {
    tasks: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired
};
