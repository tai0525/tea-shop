<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item>
      <el-icon class="icetea" :size="50" color="#000"><IceTea /></el-icon>
      <el-text tag="b" size="large">沁記茶行</el-text>
      <!-- <img style="width: 100px" src="" alt="Element logo" /> -->
    </el-menu-item>
    <ul class="navbar">
      <li class="nav-item" v-for="item in navList" :key="item.id">
        <el-badge v-if="item.type === 'icon'">
          <el-button :icon="ShoppingCart" />
        </el-badge>
        <el-button v-else link @click="changePage(item.link)">{{ item.title }}</el-button>
      </li>
    </ul>
  </el-menu>
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
.navbar {
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px;
  position: relative;
  width: 100%;

  .nav-item {
    list-style-type: none;
    padding: 0 20px;
  }
}
</style>
  