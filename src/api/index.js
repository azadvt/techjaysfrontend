import axios from 'axios'
const API = axios.create({ baseURL : process.env.REACT_APP_BASE_URL})
export const signup = (formData) => API.post('/api/auth/signup',formData) 
export const login = (formData) => API.post('/api/auth/login',formData)
export const getEmployees = ()=> axios.get('https://jsonplaceholder.typicode.com/users')