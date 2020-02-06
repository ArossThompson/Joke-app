import axios from 'axios';

export const chuckAPI = axios.create({
    baseURL : "https://api.icndb.com/"
})
