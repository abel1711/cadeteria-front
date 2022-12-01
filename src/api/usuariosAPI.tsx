import axios from 'axios';


export const usuariosAPI = axios.create({
    baseURL:'http://localhost:8080/api/usuarios'
})