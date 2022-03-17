import axios from 'axios';

const BASE_URL = 'http://localhost:1337/api';


const makeRequest = axios.create({
  baseURL: BASE_URL,

  params: {
    sort: 'publishedAt:desc',
  },
});

export default makeRequest;
