import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://ergast.com/api/f1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': '*',
  },
});
