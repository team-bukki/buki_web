import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://buki-api.shop',
});

export { instance };
