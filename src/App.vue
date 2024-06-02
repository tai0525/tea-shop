<script setup>
import { ref, onMounted, provide } from 'vue'
import { productApi } from '@/api/module/product'
import { setProducts, getCart, setCart } from '@/utils/localStorage'
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
const cards = ref([])
const removeFromCart = (id) => {
  const newCart = getCart().filter((product) => product.id !== id)
  setCart([...newCart])
  cartStore.setToCart([...newCart])
}

const getProducts = async () => {
  const { code, data } = await productApi.getProducts()
  if (code === 200) {
    // 渲染畫面
    cards.value = data
    // 儲存資料
    setProducts(data)
  }
}
provide('data', { cards, removeFromCart })

onMounted(() => {
  if (!getProducts().length) {
    getProducts()
  }
})
</script>

<template>
  <RouterView />
</template>