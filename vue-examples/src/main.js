import Vue from 'vue'
import App from './App.vue'
import './plugins/select'
import './plugins/highlight'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
