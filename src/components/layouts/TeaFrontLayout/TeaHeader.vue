<template>
  <div>
    <nav class="p-5 md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <el-icon class="icetea" :size="30" color="#000"><IceTea /></el-icon>
        <h1 class="px-1 text-2xl font-bold">{{ t('chinji') }}</h1>
      </div>

      <ul
        class="md:flex md:items-center md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-6"
      >
        <li class="mx-4 my-4 md:my-0" v-for="item in navList" :key="item.id">
          <el-badge v-if="item.type === 'icon'">
            <el-button :icon="ShoppingCart" />
          </el-badge>
          <el-button
            class="text-xl"
            v-else
            link
            @click="isLogin ? logout() : changePage(item.link)"
            >{{ item.title }}</el-button
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
import { ShoppingCart } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import { removeToken } from '@/utils/localStorage'
import { useUserStore } from '@/stores/user'

const { t } = useI18n()
const userStore = useUserStore()

const router = useRouter() //到此頁面
const changePage = (link) => {
  router.push(link)
}

const logout = () => {
  removeToken()
  userStore.setIsLogin(false)
}
const props = defineProps({
  isLogin: {
    type: Boolean,
    default: false
  }
})

// TODO: ref 改成 computed
const navList = computed(() => [
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
  },
  {
    id: 5,
    title: props.isLogin ? '登出' : '登入',
    link: props.isLogin ? '' : '/login'
  }
])
</script>
  