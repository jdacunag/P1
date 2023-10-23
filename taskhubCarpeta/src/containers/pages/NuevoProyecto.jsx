import BotonSiguiente from '../../components/generalidades/btnNext';
import Cuadro from '../../components/NuevoProyecto/Cuadro';
import CuadroDescripcion from '../../components/NuevoProyecto/CuadroDescripcion';
import Fondo from '../../components/generalidades/Fondo';
import { useForm } from 'react-hook-form';
import { createProject } from '../../api/projects.api';
import { useSession } from '../../hooks/useSession';
import { BotonUsuario } from '../../components/generalidades/btnCampo'
import LoginUser from '../../components/Login/LoginUser';
import { Usenavigate, useNavigate } from 'react-router-dom';

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
    const  navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const data = null;
    const onSubmit = handleSubmit((data) => {
        data = Object.assign({}, data, { usuario: userId });
        console.log(data);
        const res =  createProject(data);
        if(res){
            navigate('/home')
        }
    });
    return (
        <div style={Fondo}>
            <div style={Cuadro}>
                <div style={{...Titulo, top:'2.5%'}}>
                    <h1>Crear Nuevo Proyecto</h1>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div style={{...BotonUsuario, top:'20%'}}>
                        <input
                            placeholder="Nombre del proyecto"
                            name="nombre"
                            {...register('nombre', { required: true })}
                            style={LoginUser}
                        />
                        </div>
                        <textarea
                            id="Descripcion"
                            name="descripcion"
                            style={CuadroDescripcion}
                            placeholder="Descripción"
                            {...register('descripcion', { required: true })}
                        />

                        <button style={{ ...BotonSiguiente }} type="submit">
                            {' '}
                            Crear{' '}
                        </button>
                    </form>
          
            </div>
        </div>
    );
}

export default NuevoProyecto;
