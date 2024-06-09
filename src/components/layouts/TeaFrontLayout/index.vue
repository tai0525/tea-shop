// TODO: 改寫 router view
<template>
  <tea-header :is-login="isPageLogin" />
  <router-view />
  <tea-footer />
</template>
<script setup>
import TeaHeader from './TeaHeader.vue'
import TeaFooter from './TeaFooter.vue'
import { computed } from 'vue'
// TODO: 登入狀態
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const isPageLogin = computed(() => userStore.isLogin)
</script>
