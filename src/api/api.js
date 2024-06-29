import axios from "axios";
const local = 'https://easyshop-backend-b4ge.onrender.com'
const production = ''
const api = axios.create({
    baseURL : `${local}/api`
})

export default api