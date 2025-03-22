import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://159.223.35.227:8080/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Bearer token interceptor
instance.interceptors.request.use(function (config) {
    // Get token directly from localStorage instead of using the hook
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

instance.interceptors.response.use(function (response) {
    return response && response.data ? response.data : response;
}, function (error) {
   return error && error.response && error.response.data
         ? error.response.data
         : Promise.reject(error);
});

export default instance;