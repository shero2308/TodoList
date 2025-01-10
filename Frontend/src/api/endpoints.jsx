import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/'

const GET_TODO = `${BASE_URL}todo/`
const CREATE_TODO = `${BASE_URL}create/`
const DELETE_TODO = `${BASE_URL}delete/`
const UPDATE_TODO = `${BASE_URL}update/`

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

export const delete_todo = async (id) =>{
    const response = await axios.delete(`${DELETE_TODO}${id}`);
    return response.data
}

export const update_todo = async (id , updateFeilds) =>{
    const response = await axios.put(`${UPDATE_TODO}${id}`,updateFeilds,);
    return response.data
}