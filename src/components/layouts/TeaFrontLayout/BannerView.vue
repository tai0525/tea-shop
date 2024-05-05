<template>
  <div class="wrap">
    <header class="main-header">
      <div class="slogan">
        <div class="special-bg">
          <h2>茶味經典，沁記嚴選。</h2>
          <div v-for="item in bannerList" :key="item.id">
            <el-button color="#994e3d" size="large" :dark="isDark" @click="changePage(item.link)"
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

<style lang="scss" scoped>
.main-header {
  background: url(@/assets/images/banner.jpg) fixed;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;

  .slogan {
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .special-bg {
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    padding: 20px;
  }
}
</style>