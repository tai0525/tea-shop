<template>
  <div class="container px-4 py-5">
    <el-row class="mb-2">
      <el-col :span="10">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">{{ t('nav.home') }}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/products' }">
            {{ t('all_product') }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ product.category }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="bg-cover bg-center">
          <img
            :src="product.image"
            :alt="product.name"
            class="py-5 w-[400px] h-[400px] object-cover"
          />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="flex py-6">
          <h2 class="text-3xl font-bold">{{ product.name }}({{ product.size }})</h2>
        </div>
        <p class="text-lg pt-5">{{ product.desc }}</p>
        <p class="text-2xl font-semibold text-main py-5">售價 NT$: {{ product.price }}</p>
        <div class="flex justify-between">
          <el-input-number v-model="quantity" size="large" :min="1" :max="30" />
          <el-button class="" color="#994e3d" :dark="isDark" @click="addToCart(routeId)">{{
            t('add_cart')
          }}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
  <tea-product-info class="mt-6" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import TeaProductInfo from '@/components/TeaProductInfo/index.vue'
import { ref, inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setCart } from '@/utils/localStorage'
import { useCartStore } from '@/stores/cart'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const { products } = inject('data')
const cartStore = useCartStore()

const route = useRoute()
const routeId = ref(Number(route.params.id))
const product = computed(() => {
  return products.value.find((card) => card.id === Number(routeId.value))
})
const quantity = ref(1)

const addToCart = (id) => {
  const product = products.value.find((product) => product.id === id)
  const cart = cartStore.cart
  const newProduct = {
    ...product,
    quantity: quantity.value
  }
  if (!cart.length) {
    // 購物車為空
    setCart([newProduct])
    cartStore.setToCart([newProduct])
    return
  }
  if (cart.some((product) => product.id === id)) {
    // 如果cart有此商品
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity = quantity.value
        return product
      }
      return product
    })
    setCart([...newCart])
    cartStore.setToCart([...newCart])
  } else {
    // 沒有此商品
    setCart([...cart, newProduct])
    cartStore.setToCart([...cart, newProduct])
  }
  ElMessage({
    message: t('add_to_cart'),
    type: 'success'
  })
}
</script>