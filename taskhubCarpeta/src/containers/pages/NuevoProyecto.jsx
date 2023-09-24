import BotonSiguiente from '../../components/NuevoProyecto/BotonSiguiente';
import Cuadro from '../../components/NuevoProyecto/Cuadro';
import CuadroDescripcion from '../../components/NuevoProyecto/CuadroDescripcion';
import Fondo from '../../components/NuevoProyecto/Fondo';
import { useSession } from '../../hooks/useSession';

const Titulo = {
    textAlign: 'center',
    position: 'absolute',
    top: '8%',
    fontFamily: 'Arial',
    fontSize: '30px',
    color: 'white',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '20px',
    marginTop: '20px',
};

function NuevoProyecto() {
    const { userId } = useSession();

    return (
        <div style={Fondo}>
            <div style={Cuadro}>
                <div style={Titulo}>
                    <h1>Crear Nuevo Proyecto</h1>
                    <div>
                        <textarea id="Descripcion" name="Descripcion" style={CuadroDescripcion} />
                    </div>
                </div>
                <div style={BotonSiguiente}>Crear proyecto</div>
            </div>
        </div>
    );
}

export default NuevoProyecto;
