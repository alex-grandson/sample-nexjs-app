import { makeAutoObservable } from 'mobx'

export class Auth {
  username = undefined
  type = undefined // country || vendor
  id = undefined

  constructor() {
    makeAutoObservable(this)
  }

  getUsername() {
    return this.username
  }

  logout() {
    this.username = undefined
    this.type = undefined
  }

  setAuth(username, type, id) {
    this.type = type
    this.username = username
    this.id = id
  }
}
