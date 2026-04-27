import axios from 'axios';

export const apiBlog = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});
