import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.origemveiculos.com.br',
});

export default api;
