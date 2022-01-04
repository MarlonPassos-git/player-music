import axios from 'axios';


const api = axios.create({
    baseURL: 'https://player-music-pi.vercel.app/api/',
}) 


export default api;