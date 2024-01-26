import axios from 'axios';
import { API_URL } from '../constants';

const instance = axios.create({
    baseURL: API_URL,
});

//interceptors
instance.interceptors.request.use(function (config) {
    if(localStorage.getItem('token')){
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
    }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default instance;