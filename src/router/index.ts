import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/net',
      name: 'net',
      component: () => import('../views/Net.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auths.vue')
    }
  ]
})

export default router
