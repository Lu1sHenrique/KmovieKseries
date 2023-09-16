import axios from 'axios';
//import Config from "react-native-config";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios.create({
    baseURL: 'https://kmovieskseries-hom-c7d011b04fcd.herokuapp.com'
});

export default api;