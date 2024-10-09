// Here All The code Related Axios Configuration

import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000, // request timeout
    headers: {
      'Content-Type': 'application/json',
    },
});

// Manuplated as per requiremements ( while Respose The API)
// Handle 401 Error Here 
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    },
);

export default api;





