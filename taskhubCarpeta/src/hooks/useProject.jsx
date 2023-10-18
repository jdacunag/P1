import { createContext, useCallback, useContext, useState } from 'react';

const ProjectSessionContext = createContext();

export function ProjectIdProvider({ children }) {
    const [ProjectId, setProjectId] = useState();

    const setSecureId = useCallback((id) => {
        setProjectId(id);
    });

    return <ProjectSessionContext.Provider value={{ ProjectId, setSecureId }}>{children}</ProjectSessionContext.Provider>;
}

export function useProject() {
 
    const context = useContext(ProjectSessionContext);
    if (!context) {
        throw new Error('useSession debe usarse dentro de un UserIdProvider');
    }
    return context;
}
