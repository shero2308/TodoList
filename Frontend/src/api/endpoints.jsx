import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/'

const GET_TODO = `${BASE_URL}todo/`

export const get_todo = async () =>{
    const response = await axios.get(GET_TODO);
    return response.data;
}

