import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '@/constants/index';

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': '*',
  },
});
