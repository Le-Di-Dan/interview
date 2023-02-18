import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/styles.css'
import MyPlugin from './plugins/my_plug_ins'

Vue.config.productionTip = false
Vue.use(MyPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
