import axios from 'axios'
import BaseService from './BaseAPI'

const API_HOST = process.env.API_HOST

const coutryAPI = axios.create({
  baseURL: API_HOST,
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
})

export default class CountryService extends BaseService {

  static async getOrdersByCountryId(countryId) {
    return coutryAPI.get(
      `/get_orders_by_country${countryId && `?country-id=${countryId}`}`
    )
  }

  static async getSubsidies(countryId) {
    return coutryAPI.get(`/get_subsidies_by_country${countryId && `?country-id=${countryId}`}`)
  }

  static async createSubsidy(countryId, reqPrice, reqWD) {
    return coutryAPI.post('/create_subsidy', { 'country-id-by': countryId, 'require-price-by': reqPrice, 'required-wd-by': reqWD })
  }

  static async createOrder(model_id, order_type, quantity, country_to_id) {
    return coutryAPI.post('/create_order', { 'model_id': model_id, 'order_type': order_type, 'quantity': quantity, 'country_to_id': country_to_id })
  }
}
