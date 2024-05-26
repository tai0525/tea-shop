<template>
  <div class="container">
    <el-row class="items-center my-5" :gutter="20">
      <el-col :span="4">
        <h5 class="my-2 absolute top-0">產品分類</h5>
        <el-menu class="el-menu-vertical-demo absolute top-10">
          <el-menu-item v-for="item in categoryMenu" :key="item.id" :index="id">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-row>
          <tea-product-card
            v-for="item in cards"
            :key="item.id"
            :image="item.image"
            :name="item.name"
            :price="item.price"
          />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TeaProductCard from '@/components/TeaProductCard/index.vue'
import { productApi } from '@/api/module/product'
import { setProducts } from '@/utils/localStorage'

const cards = ref([])

const getProducts = async () => {
  const { code, data } = await productApi.getProducts()
  if (code === 200) {
    // 渲染畫面
    cards.value = data
    // 儲存資料
    setProducts(data)
  }
}

const router = useRouter()
const goToProduct = (id) => {
  router.push(`/productDetail/${id}`)
}

const categoryMenu = ref([
  {
    id: 1,
    name: '全部'
  },
  {
    id: 2,
    name: '阿里山茶系列'
  },
  {
    id: 3,
    name: '凍頂烏龍茶系列'
  },
  {
    id: 4,
    name: '台灣紅茶系列'
  },
  {
    id: 5,
    name: '台灣綠茶系列'
  }
])

onMounted(() => {
  if (!getProducts().length) {
    getProducts()
  }
})
</script>
