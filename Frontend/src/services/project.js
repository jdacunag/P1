import axios from 'axios';

export async function getAll(userId) {
    try {
        const response = await axios.get(`/api/v1/projects/?usuario=${userId}`);
        return response.data;
    } catch (error) {
        if (error.response) throw new Error('Projects could not be listed');
    }
}

export async function deleteById(projectId) {
    try {
        await axios.delete(`/api/v1/projects/${projectId}/`);
    } catch (error) {
        if (error.response) throw new Error('The project could not be deleted');
        throw new Error('Something went wrong');
    }
}

export async function editById(projectId, title, description, image, userId) {
    try {
        const body = { nombre: title, img: image, descripcion: description, usuario: userId };
        await axios.put(`/api/v1/projects/${projectId}/`, body);
    } catch (error) {
        if (error.response) throw new Error('The project could not be created');
        throw new Error('Something went wrong');
    }
}

export async function createProject(userId) {
    try {
        const body = {
            nombre: 'default',
            img: 'data:image/png;base64,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',
            descripcion: 'default',
            usuario: userId,
        };
        const res = await axios.post(`/api/v1/projects/`, body);
        if (res) {
            return res.data.id;
        }
    } catch (error) {
        if (error.response) throw new Error('The project could not be created');
        throw new Error('Something went wrong');
    }
}

export async function InviteUser(projectId, userId, role) {
    try {
        const body = { usuario: { id: userId, rol: role } };
        await axios.post(`/api/v1/${projectId}/add/`, body);
    } catch (error) {
        if (error.response) throw new Error('The project could not be created');
        throw new Error('Something went wrong');
    }
}
