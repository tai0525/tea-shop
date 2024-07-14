<template>
  <div class="flex flex-col items-center">
    <div class="my-4">
      <el-input
        v-model="inputValue"
        style="width: 340px"
        size="large"
        placeholder="搜尋茶葉"
        :suffix-icon="Search"
        clearable
      />
    </div>
    <div v-if="inputValue && filterProducts.length" class="text-center">
      <div v-for="product in filterProducts" :key="product.id" class="my-2">
        <span @click="navigateToDetail(product)" class="text-main cursor-pointer">
          {{ product.name }}
        </span>
      </div>
    </div>
    <div v-else-if="inputValue" class="mt-4">沒有找到相關結果</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getProducts } from '@/utils/localStorage'
import { useRouter } from 'vue-router'

const router = useRouter()
const inputValue = ref('')
const allProducts = ref([]) // 所有產品
const filterProducts = ref([]) // 搜尋過濾後的產品

// 初始所有產品
onMounted(() => {
  allProducts.value = getProducts()
})

// 監聽 inputValue
watch(inputValue, (newVal) => {
  searchProducts(newVal)
})

// 搜尋功能
const searchProducts = (query) => {
  if (!query) {
    filterProducts.value = []
  } else {
    filterProducts.value = allProducts.value.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  }
}

// 點擊產品跳轉到詳細頁面
const navigateToDetail = (product) => {
  router.push(`productDetail/${product.id}`)
}
</script>
