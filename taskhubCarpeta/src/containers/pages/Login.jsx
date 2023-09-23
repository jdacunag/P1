import Fondo from '../../components/Login/Fondo';
import CuadroTexto from '../../components/Login/CuadroTexto';
import BotonIngreso from '../../components/Login/BotonIngreso';
import BotonUsuario from '../../components/Login/BotonUsuario';
import LoginUser from '../../components/Login/LoginUser';
import BotonContraseña from '../../components/Login/BotonContraseña';
import LoginPassword from '../../components/Login/LoginPassword';
import { useForm } from 'react-hook-form';
import { verificarUser } from '../../api/login.api';
import { useSession } from '../../hooks/useSession';
import Registro from '../../components/Login/RegistroStyle';
import Titulo from '../../components/Login/Titulo';

function iraHome(id) {
    document.cookie = `id=${id}`;
    window.location.href = '/Home';
}

function iraRegistro() {
    window.location.href = '/Registro';
}

function Login() {
    const { setSecureId } = useSession();
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await verificarUser(data);
            if (res.boolean === 'true') {
                iraHome(res.id);
            } else {
                console.log(res.boolean);
                console.log('error');
            }
        } catch (e) {}
    });

    return (
        <div style={Fondo}>
            <form onSubmit={onSubmit}>
                <div style={CuadroTexto}>
                    <div style={Titulo}>
                        <p>Bienvenido</p>
                    </div>
                    <div style={BotonUsuario}>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            {...register('username', { required: true })}
                            style={LoginUser}
                        />
                    </div>
                    <button style={Registro} onClick={iraRegistro}>
                        ¿No tienes cuenta? Registrate
                    </button>
                    <div style={BotonContraseña}>
                        <input
                            type="text"
                            placeholder="password"
                            name="password"
                            {...register('password', { required: true })}
                            style={LoginPassword}
                        />
                    </div>

                    <button style={BotonIngreso} type="submit">
                        Ingreso
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
