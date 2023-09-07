import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios.create({
    baseURL: 'http://192.168.0.9:8080'
});

export default api;