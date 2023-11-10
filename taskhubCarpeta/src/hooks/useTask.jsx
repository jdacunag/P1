import { createContext, useCallback, useContext, useState } from 'react';

const TaskSessionContext = createContext();

export function TaskIdProvider({ children }) {
    const [taskId, setTaskId] = useState();

    const setSecureId = useCallback((id) => {
        setTaskId(id);
    });

    return <TaskSessionContext.Provider value={{ taskId, setSecureId }}>{children}</TaskSessionContext.Provider>;
}

export function useProject() {
    const context = useContext(TaskSessionContext);
    if (!context) {
        throw new Error('useSession debe usarse dentro de un UserIdProvider');
    }
    return context;
}
