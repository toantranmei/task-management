import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Task from '@/components/tasks/Index'
import Project from '@/components/projects/Index'
import Email from '@/components/email/Index'
import Group from '@/components/groups/Index'
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
