import Fondo from '../../components/generalidades/Fondo';
import CuadroTexto from '../../components/Login/CuadroTexto';
import BotonIngreso from '../../components/generalidades/btnNext';
import BotonUsuario from '../../components/generalidades/btnCampo';
import LoginUser from '../../components/Login/LoginUser';
import BotonContraseña from '../../components/Login/BotonContraseña';
import LoginPassword from '../../components/Login/LoginPassword';
import { useForm } from 'react-hook-form';
import { verificarUser } from '../../api/login.api';
import { useSession } from '../../hooks/useSession';
import Registro from '../../components/Login/RegistroStyle';
import Titulo from '../../components/generalidades/Titleloginregister';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const { setSecureId } = useSession();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log(data)
            const res = await verificarUser(data);
            if (res) {
                setSecureId(res.id);
                navigate('/home');
            } else {
                navigate('/home');
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
                    <div style={{ ...BotonUsuario, transform: 'translateX(-0%)' }}>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            {...register('username', { required: true })}
                            style={LoginUser}
                        />
                    </div>
                    <div style={BotonContraseña}>
                        <input
                            type="password" // Cambié el tipo de input a "password"
                            placeholder="password"
                            name="password"
                            {...register('password', { required: true })}
                            style={LoginPassword}
                        />
                    </div>
                    <Link to="/registro" style={Registro}>
                        ¿No tienes cuenta? Regístrate
                    </Link>
                    <button style={BotonIngreso} type="submit">
                        Ingreso
                    </button>
                </div>
            </form>
        </div>
    );
}

const styles = {
    inputContainer: {
        margin: '10px 0, 10px', // Espacio entre campos de entrada
    },
};

export default Login;
