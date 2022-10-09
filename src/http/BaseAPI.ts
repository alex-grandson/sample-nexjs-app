import axios from 'axios'

const API_HOST = process.env.API_HOST

/*
 * Конфигурация базового API
 */
const baseAPI = axios.create({
  baseURL: API_HOST,
  timeout: 1000,
  withCredentials: true,
})

export default class BaseService {
  static async getModels() {
    return baseAPI.get('/get_models')
  }
}
