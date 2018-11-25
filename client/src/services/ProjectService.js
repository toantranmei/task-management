import Api from '@/services/Api'

export default {
  index () {
    return Api().get('projects')
  },
  newProject (project) {
    return Api().post('projects', project)
  },
  show (projectId) {
    return Api().get(`projects/${projectId}`)
  }
}