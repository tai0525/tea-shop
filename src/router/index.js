import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/index.vue')
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: () => import('@/views/Knowledge/index.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/views/Products/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
