import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function Button({ icon, submit, onClick, children }) {
    return (
        <button type={submit ? 'submit' : 'button'} onClick={onClick} className={style.button}>
            <FontAwesomeIcon icon={icon} color="white" />
            <p>{children}</p>
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.object.isRequired,
    submit: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
};
