<template>
  <el-menu :default-active="activeIndex" class="bg-main font-bold" mode="horizontal">
    <el-menu-item
      class="text-xl"
      v-for="item in menuList"
      :key="item.id"
      :index="id"
      @click="changePage(item.link)"
      >{{ item.title }}</el-menu-item
    >
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const changePage = (link) => {
  router.push(link)
}
const menuList = ref([
  {
    id: 1,
    title: t('back.products'),
    link: '/back/backproducts'
  },
  {
    id: 2,
    title: t('back.orders'),
    link: '/back/orders'
  },
  {
    id: 3,
    title: t('back.sales'),
    link: '/back/sales'
  },
  {
    id: 4,
    title: t('logout'),
    link: '/login'
  }
])
</script>