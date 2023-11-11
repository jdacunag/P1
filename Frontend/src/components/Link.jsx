import PropTypes from 'prop-types';
import { Link as WouterLink } from 'wouter';
import style from './Link.module.css';

export default function Link({ href, children }) {
    return (
        <WouterLink href={href} className={style.link}>
            {children}
        </WouterLink>
    );
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};
