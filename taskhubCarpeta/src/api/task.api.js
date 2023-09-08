import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})


const projectApi = axios.create({
    	baseURL: 'http://127.0.0.1:8000/tasks/api/v1/projects/'
})


const usersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/users/'
})  

export const getAllProjects = () => projectApi.get('/')
export const createProject = (project) =>  projectApi.post('/', project)

export const getAllTasks = () => tasksApi.get('/')
export const createTask = (task) => tasksApi.post('/', task)

export const getAllUsers = () => usersApi.get('/')
export const createUser = (user) => usersApi.post('/', user)