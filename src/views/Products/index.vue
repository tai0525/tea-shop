<template>
  <div class="container">
    <el-row class="items-center my-5" :gutter="20">
      <el-col :span="4">
        <h5 class="my-2 text-center">產品分類</h5>
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item v-for="item in categoryMenu" :key="item.id" :index="id">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-row class="">
          <el-card
            style="max-width: 380px"
            shadow="hover"
            class="mx-3"
            @click="goToProduct(item.id)"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            />
            <div class="text-center text-main text-lg font-semibold py-2">Hamburger</div>
            <el-row class="justify-between pt-2 font-semibold text-lg"
              >NT$120
              <el-button color="#994e3d" :dark="isDark">加入購物車</el-button>
            </el-row>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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
    name: '茶具全系列'
  }
])
</script>
