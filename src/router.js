import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Auth from './views/Auth'
import Blog from './views/Blog'
import NewBlogEntry from './views/NewBlogEntry'
import ShowBlogEntry from './views/ShowBlogEntry'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Auth',
      component: Auth,
      meta: { layout: 'no-toolbar' }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/entry/:id',
      name: 'ShowBlogEntry',
      component: ShowBlogEntry
    },
    {
      path: '/blog/new',
      name: 'NewBlogEntry',
      component: NewBlogEntry
    }
  ]
})
