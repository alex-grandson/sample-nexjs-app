import axios from 'axios'
import BaseService from './BaseAPI'

const API_HOST = process.env.API_HOST

const vendorAPI = axios.create({
  baseURL: API_HOST,
  timeout: 1000,
  // withCredentials: true
  // headers: { 'X-Custom-Header': 'foobar' },
})

export default class VendorService extends BaseService {
  static async getOrders() {
    return vendorAPI.get('/get_orders')
  }

  static async getOrdersByVendorId(vendorId) {
    return vendorAPI.get(`/get_orders_by_vendor${vendorId && `?vendor-id=${vendorId}`}`)
  }

  static async getEngineers(vendorId) {
    return vendorAPI.get(`/get_engineers_by_vendor${vendorId && `?vendor-id=${vendorId}`}`)
  }

  static async getFactories(vendorId) {
    return vendorAPI.get(`/get_factories_by_vendor${vendorId && `?vendor-id=${vendorId}`}`)
  }

  static async createModel(name_new, significance_new, engineer_id, factory_id ) {
    return vendorAPI.post('/create_model', { engineer_id, factory_id, name_new, significance_new })
  }

  static async getSubsidies() {
    return vendorAPI.get('/get_subsidies')
  }

  static async acceptSubsidy(values, sys) {
    return vendorAPI.post('/accept_subsidy', { ...values })
  }
  static async getTypes() {
    return vendorAPI.get('/get_types')
  }

  static async getComponents() {
    return vendorAPI.get('/get_components')
  }
  static async doOrder(order_id) {
    return vendorAPI.post('/do_order', { 'order_id': order_id })
  }
}
