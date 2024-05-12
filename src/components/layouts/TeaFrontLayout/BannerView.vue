<template>
  <div class="wrap mx-3-">
    <header
      class="container-none flex py-20 md:items-center justify-center bg-banner bg-cover bg-center bg-fixed"
    >
      <div class="text-white p-10 text-center flex items-center">
        <div class="bg-stone-600/50 relative p-10">
          <span class="text-3xl font-bold">茶味經典，沁記嚴選。</span>
          <div class="pt-5" v-for="item in bannerList" :key="item.id">
            <el-button
              class="text-xl bg-main"
              size="large"
              color="#994e3d"
              :dark="isDark"
              @click="changePage(item.link)"
              >探索好茶</el-button
            >
          </div>
          <!-- <RouterLink to="/user/products" class="stretched-link btn btn-primary link-light btn-lg"
            >探索好茶</RouterLink
          > -->
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'

const router = useRouter() //到此頁面
const changePage = (link) => {
  router.push(link)
}

const bannerList = ref([
  {
    id: 1,
    link: '/products',
    type: 'button'
  }
])
</script>