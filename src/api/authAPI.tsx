import axios from 'axios';

export const authAPI = axios.create({
    baseURL:'http://192.168.0.244:8080/api/auth'
})