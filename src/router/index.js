import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import modules from '@/modules'

const isAuthenticated = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

modules.forEach(module => {
  const moduleRoutes = module.routes
  moduleRoutes.forEach(moduleRoute => router.addRoute(moduleRoute))
})

router.beforeEach((to, from, next) => {
  console.log('31')
  try {
    const isAuthenticated = Boolean(window.localStorage.getItem('authenticated')) || false
    if((to.name !== "SignupPage" && to.name !== "LoginPage") && !isAuthenticated) {
      console.log('34', isAuthenticated)
      return next({name: "LoginPage"})
    }
    console.log('37')
    next()
  } catch (error) {
    console.log(error?.message)
  }
})
export default router
