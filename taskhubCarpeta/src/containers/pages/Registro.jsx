import CuadroTexto from '../../components/Registro/CuadroTexto';
import Fondo from '../../components/generalidades/Fondo';
import BotonUsuario from '../../components/generalidades/btnCampo';
import BotonContraseña from '../../components/Registro/BotonContraseña';
import LoginUser from '../../components/Login/LoginUser';
import Titulo from '../../components/generalidades/Titleloginregister';
import BotonIngreso from '../../components/generalidades/btnNext';
import LoginPassword from '../../components/Login/LoginPassword';
import { useForm } from 'react-hook-form';
import { createUser } from '../../api/users.api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);
    const navigate  = useNavigate();
    const onSubmit = handleSubmit(async (data) => {

        try{
        await createUser(data);
        navigate('/');
        }catch{
            setError("no se pudo crear el Usuario, por favor cambie los datos");
        }
        
    });

    return (
        <div style={Fondo}>
            <div style={CuadroTexto}>
                <div style={Titulo}>
                    <p>Registro</p>
                </div>
                <form onSubmit={onSubmit}>
                    <div style={{ ...BotonUsuario, top: '33%' }}>
                        <input
                            type="text"
                            p
                            placeholder="Email"
                            name="email"
                            {...register('correo', { required: true })}
                            style={LoginUser}
                        />
                    </div>
                    <div style={BotonUsuario}>
                        <input
                            placeholder="username"
                            name="username"
                            {...register('username', { required: true })}
                            style={LoginUser}
                        />
                    </div>
                    <div style={BotonContraseña}>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            {...register('password', { required: true })}
                            style={LoginPassword}
                        />
                    </div>
                    <button style={BotonIngreso} type="submit">
                        Siguiente
                    </button>
                </form>
                {error  && <div style={{ color: 'red', fontSize:'11.5px' }}>{error }</div>}
            </div>
        </div>
    );
}

export default Registro;
