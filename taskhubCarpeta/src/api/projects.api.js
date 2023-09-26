import axios from 'axios';

const projectApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/projects/',
});

export const getAllProjects = (id) => projectApi.get('/?usuario=' + id);
export const createProject = (project) => projectApi.post('/', project);
