import Api from '@/services/Api'

export default {
  index (projects) {
    return Api().get('projects', {
      params: projects
    })
  }
}