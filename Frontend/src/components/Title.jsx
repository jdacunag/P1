import PropTypes from 'prop-types';
import style from './Title.module.css';

export default function Title({ white, children }) {
    return (
        <h1 style={{ color: white ? 'white' : 'black' }} className={style.title}>
            {children}
        </h1>
    );
}

Title.propTypes = {
    white: PropTypes.bool,
    children: PropTypes.string.isRequired,
};
