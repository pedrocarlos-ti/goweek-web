import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-goweek.mybluemix.net'
});

export default api;