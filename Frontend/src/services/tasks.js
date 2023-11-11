import axios from 'axios';

export async function getAll(tasksId) {
    try {
        const response = await axios.get(`/api/v1/tasks/?tasks=${tasksId}`);
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