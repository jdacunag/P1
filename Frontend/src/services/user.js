import axios from 'axios';

export async function login(username, password) {
    try {
        const body = { username, password };
        const response = await axios.post('/api/v1/User/', body);

        return response.data;
    } catch (error) {
        if (error.response) throw new Error('Could not log in with your account');
        throw new Error('Something went wrong');
    }
}

export async function create(username, email, password) {
    try {
        const body = { username, correo: email, password };
        await axios.post('/api/v1/users/', body);
    } catch (error) {
        if (error.response) throw new Error('Your user could not be created');
        throw new Error('Something went wrong');
    }
}
