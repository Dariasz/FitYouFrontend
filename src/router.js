import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Dashboard from './views/Dashboard'
import Auth from './views/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-in',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
