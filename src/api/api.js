import axios from 'axios'

// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/',
}

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams)

// Main api function
const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    delete: (url, config = {}) => axios.get(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    patch: (url, body, config = {}) => axios.post(url, body, config),
    put: (url, body, config = {}) => axios.post(url, body, config),
  }
}

export default api(axiosInstance)
