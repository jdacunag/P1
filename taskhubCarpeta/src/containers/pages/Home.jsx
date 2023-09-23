import React from 'react';
import BotonNuevoProyecto from '../../components/Home/BotonNuevoProyecto';
import titulo from '../../components/Home/Titulo';
import BotonVerProyectos from '../../components/Home/BotonVerProyectos';
import CuadroDeBotones from '../../components/Home/CuadroDeBotones';
import CentrarTexto from '../../components/Home/CentrarTexto';
import Fondo from '../../components/Home/Fondo';
import titulo2 from '../../components/Home/Titulo2';
import { useSession } from '../../hooks/useSession';

function obtenerCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === nombre) {
            return decodeURIComponent(value);
        }
    }
    return null; // Si la cookie no se encuentra
}

function VerProyectos() {
    const id = obtenerCookie('id');
    document.cookie = `id=${id}`;
    window.location.href = '/VerProyectos';
}

function NuevoProyecto() {
    const id = obtenerCookie('id');
    document.cookie = `id=${id}`;
    window.location.href = '/NuevoProyecto';
}

function Home() {
    const { userId } = useSession();
    const id = obtenerCookie('id');

    if (id) {
        console.log('ID recuperado:', id);
        console.log(userId);
    } else {
        console.log("La cookie 'id' no se encontró o está vacía.");
    }
    return (
        <div style={Fondo}>
            <div style={CentrarTexto}>
                <div style={titulo}>
                    <p>Bienvenido a</p>
                    {userId ? <p>Tu ID de usuario es: {userId}</p> : <p>No has iniciado sesión.</p>}
                    <br />
                    <p style={titulo2}>TaskHub</p>
                    <p>¿Que deseas hacer hoy?</p>
                </div>
                <div>
                    <div style={CuadroDeBotones}></div>
                    <button style={BotonVerProyectos} onClick={VerProyectos}>
                        Ver <br /> proyectos
                    </button>
                    <button style={BotonNuevoProyecto} onClick={NuevoProyecto}>
                        Nuevo <br /> Proyecto
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
