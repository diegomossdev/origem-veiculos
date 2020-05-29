import axios from 'axios';

const api = axios.create({
  baseURL: 'http://netbiz.cc',
});

export default api;
