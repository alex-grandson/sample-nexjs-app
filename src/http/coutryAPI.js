import axios from 'axios'
import BaseService from './BaseAPI'

const API_HOST = process.env.API_HOST

const coutryAPI = axios.create({
  baseURL: API_HOST,
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
})

export default class CountryService extends BaseService {
  static async getOrdersByCountryId() {
    return coutryAPI.get('/get_orders')
  }
  static async makeOrder(model_id, order_type, quantity) {
    return coutryAPI.post('/create_orders', { model_id, order_type, quantity })
  }
}
