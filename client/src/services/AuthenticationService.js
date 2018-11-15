import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('users/signup', credentials)
  },
  login (credentials) {
    return Api().post('users/login', credentials)
  }
}
