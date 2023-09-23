function obtenerCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === nombre) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function NuevoProyecto() {
    const id = obtenerCookie('id');

    if (id) {
        console.log('ID recuperado:', id);
    } else {
        console.log("La cookie 'id' no se encontró o está vacía.");
    }
    console.log('ID recuperado:', id);
    return <p>Nuevo Protecto</p>;
}

export default NuevoProyecto;
