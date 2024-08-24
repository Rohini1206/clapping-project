import axios from 'axios';

const API_URL = '/api/names';

const insertUser = (name: string) => {
    return axios.post('/api/names', { name }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const fetchAllNames = () => {
    return axios.get(API_URL);
};

export default {
    insertUser,
    fetchAllNames,
};
