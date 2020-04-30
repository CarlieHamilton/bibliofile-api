import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});