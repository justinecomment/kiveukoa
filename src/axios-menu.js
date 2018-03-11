import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kiveukoa.firebaseio.com/'});

export default instance;