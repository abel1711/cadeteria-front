import axios from 'axios';
import { baseUrl } from '../config/baseUrl';

export const dataPageAPI = axios.create({
    baseURL:`${baseUrl}/api/data-page`
})