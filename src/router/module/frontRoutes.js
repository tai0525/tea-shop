import FrontLayout from '@/components/layouts/TeaFrontLayout/index.vue'
import Home from '@/views/Home/index.vue'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

// TODO: 建立前台layout路由 + 之後 children 頁面路徑不要有 '/' + 加上頁面 title
// TODO: 之後可以製作後台layout

export const frontRoutes = [
    {
        path: '/',
        name: 'Public',
        component: FrontLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
                meta: {
                    title: '沁記茶行'
                }
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/About/index.vue'),
                meta: {
                    title: '關於我們'
                }
            },
            {
                path: 'knowledge',
                name: 'Knowledge',
                component: () => import('@/views/Knowledge/index.vue'),
                meta: {
                    title: '茶葉知識'
                }
            },
            {
                path: 'products',
                name: 'Products',
                component: () => import('@/views/Products/index.vue'),
                meta: {
                    title: '所有商品'
                }
            },
            {
                path: 'productDetail/:id',
                name: 'productDetail',
                component: () => import('@/views/ProductDetail/index.vue'),
                meta: {
                    title: '商品詳細頁'
                }
            },
            {
                path: 'checkout',
                name: 'checkout',
                component: () => import('@/views/Checkout/index.vue'),
                meta: {
                    title: '結帳頁'
                }
            },
        ]
    }
]