import axios from 'axios';

export async function getAll(tasksId) {
    try {
        const response = await axios.get(`/api/v1/tasks/?proyecto=${tasksId}`);
        return response.data;
    } catch (error) {
        if (error.response) throw new Error('Projects could not be listed');

    }
}


export async function deleteById(tasksId) {
    try {
        await axios.delete(`/api/v1/tasks/${tasksId}/`);
    } catch (error) {
        if (error.response) throw new Error('The tasks could not be deleted');
        throw new Error('Something went wrong');
    }
}


export async function createTask(projectId) {
    try {
        const body = { nombre: "default", description: "default", fecha_vencimiento: "2100-1-1", estado: "ToDo",
        proyecto: projectId }
        console.log(body)
        const res = await axios.post(`/api/v1/tasks/`, body)
        if (res) {
            return res.data.id
        }
    } catch (error) {
        //if (error.response) throw new Error('The project could not be created');
        //throw new Error('Something went wrong');
        throw Error(error)
    }
}

export async function editById(projectId, tasksId, nombre, description, fecha, estado) {
    try {
        const body = {};

        // Verificar y agregar propiedades no vacías al body
        if (nombre) {
            body.nombre = nombre;
            console.log(nombre)
        }

        if (projectId) {
            body.proyecto = projectId;
        }

        if (description) {
            body.description = description;
        }

        if (fecha) {
            body.Fechavencimento = fecha;
        }

        if (estado) {
            body.estado = estado;
        }

        console.log(body);

        // Verificar si el body no está vacío antes de hacer la solicitud PATCH
        if (Object.keys(body).length > 0) {
            await axios.patch(`/api/v1/tasks/${tasksId}/`, body);
        } else {
            console.log('No hay propiedades para actualizar.');
        }
    } catch (error) {
        if (error.response) {
            throw new Error('The task could not be edited');
        } else {
            throw new Error('Something went wrong');
        }
    }
}
