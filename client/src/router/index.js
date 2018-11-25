import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/Index'
import Register from '@/components/authenticate/Register'
import Login from '@/components/authenticate/Login'
import Task from '@/components/tasks/Index'
import Project from '@/components/projects/Index'
import ViewProject from '@/components/projects/ViewProject'
import Email from '@/components/email/Index'
import Group from '@/components/groups/Index'
import Setting from '@/components/settings/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
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
      path: '/projects/:projectId',
      name: 'project',
      component: ViewProject
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
