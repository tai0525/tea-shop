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
                    title: '產品管理'
                }
            },
            {
                path: 'backorders',
                name: 'Orders',
                component: () => import('@/views/BackOrders/index.vue'),
                meta: {
                    title: '訂單管理'
                }
            },
            {
                path: 'backsales',
                name: 'Sales',
                component: () => import('@/views/BackSales/index.vue'),
                meta: {
                    title: '銷售量'
                }
            },
            {
                path: '/back:pathMatch(.*)*',
                name: 'Backnotfound',
                component: () => import('@/views/BackNotFound/index.vue'),
                meta: {
                    title: '404 Not Found'
                }
            }
        ]
    }
]