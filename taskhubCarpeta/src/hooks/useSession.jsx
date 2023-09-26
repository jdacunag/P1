import { createContext, useCallback, useContext, useState } from 'react';

const UserSessionContext = createContext();

export function UserIdProvider({ children }) {
    const [userId, setUserId] = useState();

    const setSecureId = useCallback((id) => {
        setUserId(id);
    });

    return <UserSessionContext.Provider value={{ userId, setSecureId }}>{children}</UserSessionContext.Provider>;
}

export function useSession() {
    const context = useContext(UserSessionContext);
    if (!context) {
        throw new Error('useSession debe usarse dentro de un UserIdProvider');
    }
    return context;
}
