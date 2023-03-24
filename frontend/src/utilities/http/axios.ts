import axios from 'axios'
import {SERVER_URL} from '@config/config'

export const axiosInstance = axios.create({
    baseURL: SERVER_URL + '/',
    withCredentials: true,
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
});
