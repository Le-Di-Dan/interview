import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/styles.css'
import 'element-ui/lib/theme-chalk/index.css';
import MyPlugin from './plugins/my_plug_ins'
import ElementUI from 'element-ui'


Vue.config.productionTip = false
Vue.use(MyPlugin)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
