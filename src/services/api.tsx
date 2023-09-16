import axios from 'axios';
import Config from "react-native-config";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios.create({
    baseURL: Config.URL_BASE
});

export default api;