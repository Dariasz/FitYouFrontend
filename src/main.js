import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index'
import messages from './locales/index'
import CKEditor from '@ckeditor/ckeditor5-vue'

import VeeValidate, { Validator } from 'vee-validate'
import pl from 'vee-validate/dist/locale/pl'

import VueI18n from 'vue-i18n'

import DefaultLayout from './layouts/DefaultLayout'
import NoToolbarLayout from './layouts/NoToolbarLayout'

Vue.config.productionTip = false
Vue.use(VeeValidate)
Validator.localize('pl', pl)
Vue.use(VueI18n)

Vue.use(CKEditor)

Vue.component('default-layout', DefaultLayout)
Vue.component('no-toolbar-layout', NoToolbarLayout)

const i18n = new VueI18n({
  locale: 'pl',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
