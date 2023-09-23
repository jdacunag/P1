import Fondo from '../../components/Login/Fondo';
import CuadroTexto from '../../components/Login/CuadroTexto';
import BotonIngreso from '../../components/Login/BotonIngreso';
import BotonUsuario from '../../components/Login/BotonUsuario';
import LoginUser from '../../components/Login/LoginUser';
import BotonContraseña from '../../components/Login/BotonContraseña';
import LoginPassword from '../../components/Login/LoginPassword';
import { set, useForm } from 'react-hook-form';
import { verificarUser } from '../../api/login.api';
import { useSession } from '../../hooks/useSession';
import Registro from '../../components/Login/RegistroStyle';
import Titulo from '../../components/Login/Titulo';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const { setSecureId } = useSession();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await verificarUser(data);
            if (res.boolean === 'true') {
                setSecureId(res.id);
                navigate('/home');
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
                    <Link to="/registro" style={Registro}>
                        ¿No tienes cuenta? Registrate
                    </Link>
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
