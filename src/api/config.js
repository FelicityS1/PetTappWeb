import axios from "axios"

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

console.log(import.meta.env.VITE_APP);
console.log(import.meta.env.VITE_API_URL);