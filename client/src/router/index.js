import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Task from '@/components/Task'
import Project from '@/components/Project'
import Email from '@/components/Email'
import Group from '@/components/Group'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Task
    },
    {
      path: '/projects',
      name: 'projects',
      component: Project
    },
    {
      path: '/signup',
      name: 'signup',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/email',
      name: 'email',
      component: Email
    },
    {
      path: '/groups',
      name: 'groups',
      component: Group
    },
    {
      path: '/settings',
      name: 'settings',
      component: Setting
    }
  ]
})
