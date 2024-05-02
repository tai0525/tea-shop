<template>
  <!-- <nav id="nav-top" class="navbar navbar-expand-lg sticky-top bg-body py-4"> -->
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    v-for="item in navList"
    :key="item.id"
  >
    <el-menu-item index="0">
      <el-icon class="icetea"><IceTea /></el-icon>
      沁記茶行
      <!-- <img style="width: 100px" src="" alt="Element logo" /> -->
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1"></el-menu-item>
    <el-menu-item index="2"> </el-menu-item>
    <el-menu-item index="3">
      <el-badge v-if="item.type === 'icon'">
        <el-button :icon="ShoppingCart" />
      </el-badge>
      <el-button v-else link @click="changePage(item.link)">{{ item.title }}</el-button>
    </el-menu-item>
  </el-menu>

  <!-- <el-button v-else link @click="changePage(item.link)">{{ item.title }}</el-button> -->
  <!-- <div class="container px-sm-0"> -->
  <!-- <RouterLink class="navbar-brand fs-2 me-0 pt-0" style="white-space: normal" to="/"> -->
  <!-- <i class="bi bi-bullseye"></i> -->
  <!-- <el-icon class="icetea"><IceTea /></el-icon>
      沁記茶行 -->
  <!-- </RouterLink> -->

  <!-- <button
      class="navbar-toggler bg-primary"
      type="button"
      @click="toggleNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button> -->
  <!-- <div class="collapse navbar-collapse" ref="myNavBarRef">
      <ul class="navbar-nav ms-auto fs-5 text-nowrap"> -->
  <!-- <li class="nav-item mx-2" v-for="item in navList" :key="item.id"> -->
  <!-- <el-badge v-if="item.type === 'icon'" is-dot :value="3">
            <el-button :icon="ShoppingCart" />
          </el-badge>
          <el-button v-else link @click="changePage(item.link)">{{ item.title }}</el-button>
        </li> -->
  <!-- </ul> -->
  <!-- </div> -->
  <!-- </div> -->
  <!-- </nav> -->
</template>
  <script setup>
import { ref } from 'vue' //響應式
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
import { ShoppingCart } from '@element-plus/icons-vue'

const router = useRouter() //到此頁面
const changePage = (link) => {
  router.push(link)
}

const navList = ref([
  {
    id: 1,
    title: '關於我們',
    link: '/about'
  },
  {
    id: 2,
    title: '茶葉知識',
    link: '/knowledge'
  },
  {
    id: 3,
    title: '所有商品',
    link: '/products'
  },
  {
    id: 4,
    link: '/cart',
    type: 'icon'
  }
])
</script>
  
  <style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  width: 100%;
}
.icetea {
  color: black;
}
.flex-grow {
  flex-grow: 1;
}
</style>
  