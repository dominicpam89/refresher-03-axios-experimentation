import axios from 'axios';

export const apiProduct = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
});

export const apiPost = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export const apiUser = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});
