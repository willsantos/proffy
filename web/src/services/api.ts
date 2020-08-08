import axios from 'axios';

//For NGROK remeber change url on .ENV file.
const URL = window.location.hostname.includes('localhost')
? 'http://localhost:3333'
: process.env.REACT_APP_DOMAIN;

const api = axios.create({
    
    baseURL: URL,
})



export default api;