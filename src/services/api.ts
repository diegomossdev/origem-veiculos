import axios from 'axios';
import {baseUrlToAxios} from '../helpers';

const api = axios.create({
  baseURL: baseUrlToAxios
})

export default api;