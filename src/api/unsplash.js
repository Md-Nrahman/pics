import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 9dOQfc_qXMi-DHIcD0NSqxEndvI6xWLADWR2lvN9HU8'
    }
});