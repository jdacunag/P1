import BotonSiguiente from '../../components/generalidades/btnNext';
import Cuadro from '../../components/NuevoProyecto/Cuadro';
import CuadroDescripcion from '../../components/NuevoProyecto/CuadroDescripcion';
import Fondo from '../../components/generalidades/Fondo';
import { useForm } from 'react-hook-form';
import { createProject } from '../../api/projects.api';
import btnNombre from '../../components/Registro/BotonContraseña';
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
    const { register, handleSubmit } = useForm();
    const data = null;
    const onSubmit = handleSubmit((data) => {
        data = Object.assign({}, data, { usuario: userId });
        console.log(data);
        createProject(data);
    });
    return (
        <div style={Fondo}>
            <div style={Cuadro}>
                <div style={Titulo}>
                    <h1>Crear Nuevo Proyecto</h1>
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="Nombre del proyecto"
                            name="nombre"
                            {...register('nombre', { required: true })}
                        />
                        <textarea
                            id="Descripcion"
                            name="descripcion"
                            style={{ ...CuadroDescripcion, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                            {...register('descripcion', { required: true })}
                        />

                        <button style={{ ...BotonSiguiente }} type="submit">
                            {' '}
                            Crear{' '}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NuevoProyecto;
