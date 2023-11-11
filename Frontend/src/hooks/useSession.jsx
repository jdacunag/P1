/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export function SessionProvider({ children }) {
    const [userId, setUserId] = useState(parseInt(sessionStorage.getItem('userId')) || null);

    const createSession = (id) => {
        setUserId(id);
        sessionStorage.setItem('userId', id);
    };

    const removeSession = () => {
        setUserId(null);
        sessionStorage.removeItem('userId');
    };

    return (
        <SessionContext.Provider value={{ userId, createSession, removeSession }}>{children}</SessionContext.Provider>
    );
}

SessionProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default function useSession() {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error('Context should be provided');
    }

    return context;
}
