import axios from 'axios';

const usersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/users/',
});

export const getAllUsers = () => usersApi.get('/');
export const createUser = (user) => usersApi.post('/', user);
