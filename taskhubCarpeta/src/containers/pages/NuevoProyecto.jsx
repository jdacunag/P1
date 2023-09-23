import { useSession } from '../../hooks/useSession';

function NuevoProyecto() {
    const { userId } = useSession(); 


    return <p>Nuevo Protecto</p>;
}

export default NuevoProyecto;
