import CuadroTexto from '../../components/Registro/CuadroTexto';
import Fondo from '../../components/Registro/Fondo';
import BotonUsuario from '../../components/Registro/BotonUsuario';
import BotonContraseña from '../../components/Registro/BotonContraseña';
import BotonConfirmarContraseña from '../../components/Registro/BotonConfirmarContraseña';
import BotonCorreo from '../../components/Registro/BotonCorreo';
import Titulo from '../../components/Registro/Titulo';
import BotonIngreso from '../../components/Registro/BotonIngreso';
import { useForm } from 'react-hook-form';
import { createUser } from '../../api/users.api';

function iraRegistro() {
    window.location.href = '/Registro';
}

function Registro() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        createUser(data);
    });

    return (
        <div style={Fondo}>
            <div style={CuadroTexto}>
                <div style={Titulo}>
                    <p>Registro</p>
                </div>
                <form onSubmit={onSubmit}>
                    <div style={BotonCorreo}>
                        <input
                            type="text"
                            p
                            placeholder="Email"
                            name="password"
                            {...register('correo', { required: true })}
                        />
                    </div>
                    <div style={BotonUsuario}>
                        <input placeholder="username" name="username" {...register('username', { required: true })} />
                    </div>
                    <div style={BotonContraseña}>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            {...register('password', { required: true })}
                        />
                    </div>
                    <button style={BotonIngreso} type="submit">
                        Siguiente
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registro;
