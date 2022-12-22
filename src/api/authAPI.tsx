import axios from 'axios';
import { baseUrl } from '../config/baseUrl';

export const authAPI = axios.create({
    baseURL:`${baseUrl}/api/auth`
})