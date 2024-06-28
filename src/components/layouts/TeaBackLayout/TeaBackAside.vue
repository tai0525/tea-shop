<template>
  <el-aside class="h-screen text-main bg-white" width="200px">
    <div @click="changePage('/')" class="flex py-5 items-center cursor-pointer">
      <el-icon class="text-main bg-white mx-2" :size="30">
        <IceTea />
      </el-icon>
      <h1 class="text-2xl font-bold">{{ t('chinji') }}</h1>
    </div>

    <el-menu>
      <el-menu-item
        class="text-xl text-main bg-white hover:bg-secondary"
        v-for="item in menuList"
        :key="item.id"
        :index="item.id"
        @click="item.title === t('login.logout') ? logout() : changePage(item.link)"
      >
        <el-icon v-if="item.icon">
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { removeToken, removeIsAdmin } from '@/utils/localStorage'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
import { DataBoard, Document, PieChart, SwitchButton } from '@element-plus/icons-vue'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const changePage = (link) => {
  router.push(link)
}

const logout = () => {
  removeToken()
  removeIsAdmin()
  userStore.setIsLogin(false)
  ElMessage({
    message: t('message.logout_success'),
    type: 'success'
  })
  router.push('/login')
}

const menuList = ref([
  {
    id: 1,
    icon: DataBoard,
    title: t('back.products'),
    link: '/back/backproducts'
  },
  {
    id: 2,
    icon: Document,
    title: t('back.orders'),
    link: '/back/backorders'
  },
  {
    id: 3,
    icon: PieChart,
    title: t('back.sales'),
    link: '/back/backsales'
  },
  {
    id: 4,
    icon: SwitchButton,
    title: t('login.logout'),
    link: '/login'
  }
])
</script> 

