import axios from 'axios';

export async function getAll(tasksId) {
    try {
        const response = await axios.get(`/api/v1/tasks/?proyecto=${tasksId}`);
        return response.data;
    } catch (error) {
        if (error.response) throw new Error('Projects could not be listed');

    }
}


export async function deleteById(taskstId) {
    try {
        await axios.delete(`/api/v1/tasks/${taskstId}/`);
    } catch (error) {
        if (error.response) throw new Error('The tasks could not be deleted');
        throw new Error('Something went wrong');
    }
}


export async function createTask(projectId) {
    try {
        var slug = Math.floor(Math.random() * 10000000) + 1
        slug = slug.toString()
        const body = { nombre: "default"+slug, description: "default", fecha_vencimiento: "2100-1-1", estado: "ToDo", slug: slug,
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