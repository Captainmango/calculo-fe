import axios from 'axios'
import { getCookie } from 'cookies-next'

export const calculoAPI = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 4000,
    withCredentials: true
})