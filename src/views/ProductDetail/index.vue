<template>
  <div class="container px-4 py-5">
    <el-row class="mb-2">
      <el-col :span="10">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">{{ t('home') }}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/products' }">
            {{ t('all_product') }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ product.category }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="bg-cover bg-center size-96">
          <img :src="product.image" :alt="product.name" class="py-5" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="flex py-6">
          <h2 class="text-3xl font-bold">{{ product.name }}({{ product.size }})</h2>
        </div>
        <p class="text-lg pt-5">{{ product.desc }}</p>
        <p class="text-2xl font-semibold text-main py-5">售價 NT$: {{ product.price }}</p>
        <div class="flex justify-between">
          <el-input-number v-model="num" size="large" :min="1" :max="30" />
          <el-button class="" color="#994e3d" :dark="isDark" @click="addToCart">{{
            t('add_cart')
          }}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, inject, computed, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { cards } = inject('data')

const route = useRoute()
const routeId = ref(Number(route.params.id))
const product = computed(() => {
  return cards.value.find((card) => card.id === Number(routeId.value))
})
const num = ref(1)
const emit = defineEmits(['addClick'])
const addToCart = () => {
  emit('addClick')
}
</script>