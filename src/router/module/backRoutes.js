import BackLayout from '@/components/layouts/TeaBackLayout/index.vue'

export const backRoutes = [
    {
        path: '/back',
        component: BackLayout,
        children: [
            {
                path: 'backproducts',
                name: 'Backproducts',
                component: () => import('@/views/BackProducts/index.vue'),
                meta: {
                    title: '產品管理',
                    requiresAuth: true
                }
            },
            {
                path: 'backorders',
                name: 'Orders',
                component: () => import('@/views/BackOrders/index.vue'),
                meta: {
                    title: '訂單管理',
                    requiresAuth: true
                }
            },
            {
                path: 'backsales',
                name: 'Sales',
                component: () => import('@/views/BackSales/index.vue'),
                meta: {
                    title: '銷售量',
                    requiresAuth: true
                }
            },
            {
                path: '/back:pathMatch(.*)*',
                name: 'Backnotfound',
                component: () => import('@/views/BackNotFound/index.vue'),
                meta: {
                    title: '404 Not Found',
                    requiresAuth: true
                }
            }
        ]
    }
]