import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/u/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/User/Login.vue')
  },
  {
    path: '/u/me',
    name: 'me',
    component: () => import(/* webpackChunkName: "about" */ '../components/User/me.vue')
  },
  {
    path: '/u/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "about" */ '../components/User/logout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
