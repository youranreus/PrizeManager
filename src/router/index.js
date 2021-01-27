import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/p/index',  //如果是/路径, 重定向到login页面
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  // },
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
  },
  {
    path: '/p/:slot',
    name: 'page',
    component: () => import(/* webpackChunkName: "about" */ '../components/single-page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
