import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/util";

const Api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {'Access-Control-Allow-Origin': '*'}
})

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage()

    config.headers.Authorization = user?.token;

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default Api;