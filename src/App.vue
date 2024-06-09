<script setup>
import { ref, onMounted, provide } from 'vue'
import { productApi } from '@/api/module/product'
import { setProducts, getCart, setCart } from '@/utils/localStorage'
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
const products = ref([])
const removeFromCart = (id) => {
  const newCart = getCart().filter((product) => product.id !== id)
  setCart([...newCart])
  cartStore.setToCart([...newCart])
}
const clearCart = () => {
  setCart([])
  cartStore.setToCart([])
}

const getProducts = async () => {
  const { code, data } = await productApi.getProducts()
  if (code === 200) {
    // 渲染畫面
    products.value = data
    // 儲存資料
    setProducts(data)
  }
}
provide('data', { products, removeFromCart, clearCart })

onMounted(() => {
  if (!getProducts().length) {
    getProducts()
  }
})
</script>

<template>
  <RouterView />
</template>