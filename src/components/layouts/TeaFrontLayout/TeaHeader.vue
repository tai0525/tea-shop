<template>
  <div>
    <nav class="p-5 md:flex md:items-center md:justify-between">
      <div @click="changePage('/')" class="flex justify-between items-center cursor-pointer">
        <el-icon class="icetea" :size="30" color="#000"><IceTea /></el-icon>
        <h1 class="px-1 text-2xl font-bold">{{ t('chinji') }}</h1>
      </div>

      <ul
        class="md:flex md:items-center md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-6"
      >
        <li class="mx-4 my-4 md:my-0" v-for="item in navList" :key="item.id">
          <el-badge v-if="item.type === 'icon'">
            <el-button @click="visible = !visible" :icon="ShoppingCart" />
          </el-badge>
          <el-button
            class="text-xl"
            v-else
            link
            @click="isLogin ? logout() : changePage(item.link)"
            >{{ item.title }}</el-button
          >
        </li>
      </ul>
    </nav>
  </div>
  <el-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass" class="font-bold text-2xl">{{ t('cart') }}</h4>
      <el-button @click="close">
        <el-icon class="el-icon--left text-main"><CircleClose /></el-icon>
      </el-button>
    </template>
    <div class="text-end">
      <el-button class="text-main border-main"> {{ t('clear_cart') }} </el-button>
    </div>
    <div class="relative h-75">
      <!-- 購物車無商品 -->
      <div v-if="!cart.length" class="text-center absolute top-10 start-28">
        <p class="my-10 font-bold text-2xl">{{ t('no_product') }}</p>
        <el-button
          class="text-xl"
          size="large"
          color="#994e3d"
          :dark="isDark"
          @click="changePage('/products')"
          >{{ t('go_shopping') }}</el-button
        >
      </div>
      <!-- 購物車有商品 -->
      <div v-else>
        <ul>
          <li
            v-for="product in cart"
            :key="product.id"
            class="flex items-center mb-2 pb-2 border-b"
          >
            <div class="w-auto me-4">
              <img class="object-cover w-20 h-20" :src="product.image" />
            </div>
            <div class="flex justify-between items-center w-full">
              <div>
                <p>{{ product.name }}</p>
                <span>{{ product.quantity }} x</span>
                <span>NT$ {{ product.price }}</span>
              </div>
              <el-icon @click="removeFromCart(product.id)" class="cursor-pointer" :size="25"
                ><Delete
              /></el-icon>
            </div>
          </li>
        </ul>
        <div class="mt-4">
          <p class="text-end text-bold text-2xl">{{ t('total') }}: ${{ totalPrice }}</p>
          <el-button
            class="my-3 rounded-lg w-full text-xl"
            size="large"
            color="#994e3d"
            :dark="isDark"
            @click="changePage('/checkout')"
            >{{ t('go_checkout') }}</el-button
          >
        </div>
      </div>
    </div>
  </el-drawer>
</template>
<script setup>
import { defineProps, computed, ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
import { ShoppingCart } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import { removeToken } from '@/utils/localStorage'
import { useUserStore } from '@/stores/user'
import { useCartStore } from '@/stores/cart'
import { CircleClose } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const visible = ref(false)
const { removeFromCart } = inject('data')

const userStore = useUserStore()
const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)
const router = useRouter() //到此頁面
const changePage = (link) => {
  router.push(link)
}

const totalPrice = computed(() => {
  let sum = 0
  for (const product of cartStore.cart) {
    sum += product.price * product.quantity
  }
  return sum
})

const logout = () => {
  removeToken()
  userStore.setIsLogin(false)
  ElMessage({
    message: t('message.logout_success'),
    type: 'success'
  })
}
const props = defineProps({
  isLogin: {
    type: Boolean,
    default: false
  }
})

// TODO: ref 改成 computed
const navList = computed(() => [
  {
    id: 1,
    title: t('about_us'),
    link: '/about'
  },
  {
    id: 2,
    title: t('tea_knowledge'),
    link: '/knowledge'
  },
  {
    id: 3,
    title: t('all_product'),
    link: '/products'
  },
  {
    id: 4,
    link: '/cart',
    type: 'icon'
  },
  {
    id: 5,
    title: props.isLogin ? '登出' : '登入',
    link: props.isLogin ? '' : '/login'
  }
])
</script>
  