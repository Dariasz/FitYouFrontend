import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/auth'
import blogModule from './modules/blog'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    modules: {
      auth: authModule,
      blog: blogModule
    },
    plugins: [createPersistedState()]
  })
