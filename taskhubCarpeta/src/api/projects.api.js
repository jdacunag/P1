import axios from 'axios';

export const getAllProjects = async (id) => {
 const res = await  axios.get(`http://127.0.0.1:8000/tasks/api/v1/projects/?usuario=${id}`);
 console.log(res.data);
 return res.data;
};

export const deleteProject = (id) => {
    axios.delete(`http://127.0.0.1:8000/tasks/api/v1/projects/${id}/`);
};

export const editProject = (project) => {
    axios.put(`http://127.0.0.1:8000/tasks/api/v1/projects/`, project);
};

export const createProject = (project) => {
    axios.create(`http://127.0.0.1:8000/tasks/api/v1/projects/`, project);
};
