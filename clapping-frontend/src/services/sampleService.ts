import axios from 'axios';

const API_URL = '/api/samples';

const getSamples = () => {
    return axios.get(API_URL);
};

export default {
    getSamples,
};
