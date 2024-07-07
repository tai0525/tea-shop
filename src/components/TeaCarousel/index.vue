<template>
  <div class="block text-center">
    <h1 class="text-main text-3xl font-bold mt-5">{{ t('pop_product') }}</h1>
    <el-carousel :interval="3000" type="card" height="400px">
      <el-carousel-item
        v-for="(product, index) in products"
        :key="index"
        class="flex justify-center items-center"
      >
        <tea-product-card
          class="bg-secondary"
          @cardClick="cardClick(product)"
          :image="product.image"
          :name="product.name"
          :price="product.price"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TeaProductCard from '@/components/TeaProductCard/index.vue'
import { getProducts } from '@/utils/localStorage'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const products = ref([])

const router = useRouter()

const fetchProducts = () => {
  products.value = getProducts()
}

const cardClick = (product) => {
  router.push({ name: 'ProductDetail', params: { id: product.id } })
}

onMounted(() => {
  fetchProducts()
})
</script>

  