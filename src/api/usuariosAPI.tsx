import axios from 'axios';
import { baseUrl } from '../config/baseUrl';


export const usuariosAPI = axios.create({
    baseURL:`${baseUrl}/api/usuarios`
})