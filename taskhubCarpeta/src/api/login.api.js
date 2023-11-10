import axios from 'axios';

const usersVApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/User',
});

export const verificarUser = async (data) => {
    return usersVApi
        .post('/', data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};
