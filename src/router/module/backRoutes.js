import BackLayout from '@/components/layouts/TeaBackLayout/index.vue'

export const backRoutes = [
    {
        path: '/back',
        name: 'Public',
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
                path: 'orders',
                name: 'Orders',
                component: () => import('@/views/Orders/index.vue'),
                meta: {
                    title: '訂單管理'
                }
            },
            {
                path: 'sales',
                name: 'Sales',
                component: () => import('@/views/Sales/index.vue'),
                meta: {
                    title: '銷售量'
                }
            }
        ]
    }
]