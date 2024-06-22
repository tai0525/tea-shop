<template>
  <el-aside class="h-screen bg-main" width="200px">
    <div @click="changePage('/')" class="flex py-5 items-center cursor-pointer">
      <el-icon class="justify-between" :size="30" color="#000">
        <IceTea />
      </el-icon>
      <h1 class="px-1 text-2xl font-bold">{{ t('chinji') }}</h1>
    </div>

    <el-menu>
      <el-menu-item
        class="text-xl bg-main"
        v-for="item in menuList"
        :key="item.id"
        :index="id"
        @click="changePage(item.link)"
      >
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
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
    link: '/back/backorders'
  },
  {
    id: 3,
    title: t('back.sales'),
    link: '/back/backsales'
  },
  {
    id: 4,
    title: t('login.logout'),
    link: '/login'
  }
])
</script>