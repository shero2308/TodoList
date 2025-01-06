import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/'

const GET_TODO = `${BASE_URL}todo/`
const CREATE_TODO = `${BASE_URL}create/`

export const get_todo = async () =>{
    const response = await axios.get(GET_TODO);
    return response.data;
}

export const create_todo = async (todo_name) =>{
    const response = await axios.post(CREATE_TODO,
        {
            todo_name:todo_name
        }
    )
    return response.data
}