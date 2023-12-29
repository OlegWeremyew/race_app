import axios from 'axios';
import {BASE_URL} from "@/constants/index";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': '*',
  },
});
