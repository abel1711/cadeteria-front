import axios from 'axios';

export const dataPageAPI = axios.create({
    baseURL:'http://localhost:8080/api/data-page'
})