import PropTypes from 'prop-types';
import style from './Card.module.css';

export default function Card({ onClick, children }) {
    return (
        <div style={{ cursor: onClick ? 'pointer' : 'unset' }} onClick={onClick} className={style.card}>
            {children}
        </div>
    );
}

Card.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};
