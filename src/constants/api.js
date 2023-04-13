import axios from 'axios'
import { ACCESS_TOKEN } from '../util/settings/config'

const TokenCyberSoft =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y'
    

const baseURL = 'https://jiranew.cybersoft.edu.vn/api/'


export const api = axios.create()

api.interceptors.request.use((config) => {
    config = {
        ...config,
        headers: {
            TokenCyberSoft,
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        },
        baseURL,
    }

    return config
})
