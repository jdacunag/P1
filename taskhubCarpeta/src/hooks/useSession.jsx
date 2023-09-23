import { createContext, useContext, useState } from 'react';

const UserSessionContext = createContext({ userId: null, setSecureUserId: () => {} });

export function useSession() {
    const context = useContext(UserSessionContext);
    if (!context) {
        throw new Error('useSession debe usarse dentro de un UserIdProvider');
    }
    return context;
}

export function UserIdProvider({ children }) {
    const [userId, setUserId] = useState(null);

    const setSecureUserId = (id) => {
        setUserId(id);
    };

    const contextValue = {
        userId,
        setSecureUserId,
    };

    return <UserSessionContext.Provider value={contextValue}>{children}</UserSessionContext.Provider>;
}
