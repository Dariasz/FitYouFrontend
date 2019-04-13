import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Auth from './views/Auth'
import store from './store/index'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'Auth',
      component: Auth,
      meta: { layout: 'no-toolbar' },
      beforeEnter: ifNotAuthenticated
    }
  ]
})
