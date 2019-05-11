import Vue from 'vue'
import VeeValidate from 'vee-validate'

import router from '@/router.js'
import 'bootstrap/dist/css/bootstrap.css'

import App from '@/App.vue'
import store from '@/store.js'

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
