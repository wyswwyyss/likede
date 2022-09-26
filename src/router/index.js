import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]
/* Layout */
const router = new Router({
  mode: 'hash',
  routes
})
export default router
