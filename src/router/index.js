import { createRouter, createWebHistory } from 'vue-router'
import { frontRoutes } from './module/frontRoutes'
import { backRoutes } from './module/backRoutes'
import { getToken } from '@/utils/localStorage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...frontRoutes,
    ...backRoutes,
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue'),
      meta: {
        title: '登入'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to?.meta?.title) {
    document.title = to.meta.title
  }
  const token = getToken()
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next({ path: '/login' })
  } else {
    next()
    // 指定參數 => 跳轉到具體指定路由
    // TODO: 之後進結帳頁面或後台可以在這邊寫條件再放行
    // next({ path: '/about' })
  }
  // console.log(to);
  // 不指定參數 => 放行
})
export default router



