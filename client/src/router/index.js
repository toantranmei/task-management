import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/Index'
import UserDashboard from '@/components/dashboard/UserDashboard'
import Register from '@/components/authenticate/Register'
import Login from '@/components/authenticate/Login'
import Task from '@/components/tasks/Index'
import Project from '@/components/projects/Index'
import ViewProject from '@/components/projects/ViewProject'
import Email from '@/components/email/Index'
import Group from '@/components/groups/Index'
import Setting from '@/components/settings/Index'
import User from '@/components/users/Index'
import UserProfile from '@/components/users/UserProfile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard, children: [
      { path: '', name: 'userdashboard', component: UserDashboard }
    ] },
    { path: '/tasks', name: 'tasks', component: Task },
    { path: '/projects', name: 'projects', component: Project },
    { path: '/projects/:projectId', name: 'project', component: ViewProject },
    { path: '/signup', name: 'signup', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/email', name: 'email', component: Email },
    { path: '/groups', name: 'groups', component: Group },
    { path: '/settings', name: 'settings', component: Setting },
    { path: '/user', name: 'user', component: User, children: [
      { path: '', name: 'userstart', component: UserProfile }
    ] }
  ]
})


export default router