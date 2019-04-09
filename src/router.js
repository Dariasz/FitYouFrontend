import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Dashboard from './views/Dashboard'
import LoginPage from './views/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
       path: '/dashboard',
       name: 'dashboard',
       component: Dashboard
    }
  ]
})
