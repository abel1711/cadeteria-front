import axios from 'axios';
import { baseUrl } from '../config/baseUrl';


export const ordenesAPI = axios.create({
    baseURL:`${baseUrl}/api/ordenes`,
})