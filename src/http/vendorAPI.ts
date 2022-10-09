import axios from 'axios'
import BaseService from './BaseAPI'

const API_HOST = process.env.API_HOST

const vendorAPI = axios.create({
  baseURL: API_HOST,
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
})

export default class VendorService extends BaseService {
  static async getOrders() {
    return vendorAPI.get('/get_orders')
  }

  static async getTypes() {
    return vendorAPI.get('/get_types')
  }

  static async getComponents() {
    return vendorAPI.get('/get_components')
  }
}
