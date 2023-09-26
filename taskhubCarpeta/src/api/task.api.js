import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/',
});
export const getAllTasks = () => tasksApi.get('/');
export const createTask = (task) => tasksApi.post('/', task);
