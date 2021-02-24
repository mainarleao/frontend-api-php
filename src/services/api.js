import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:8000/projetos/apiPHP"
  // http://localhost:8000/projetos/apiPHP/client
})

export default api;