import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
]
/* Layout */
const router = new Router({
  mode: 'hash',
  routes
})
export default router
