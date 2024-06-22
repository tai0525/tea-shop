<template>
  <section class="md:py-5">
    <div class="container py-10">
      <el-row class="flex justify-center items-center">
        <div class="text-center">
          <el-icon class="" :size="110" color="#994e3d"><Van /></el-icon>
          <h3 class="text-3xl font-bold my-3">感謝您的購買與支持</h3>
          <p class="text-xl font-semibold mb-10">我們將盡快為您出貨，還請隨時留意宅配通知！</p>
        </div>
      </el-row>
      <el-row class="justify-center py-5">
        <div :span="6">
          <el-button
            class="text-xl me-2"
            size="large"
            color="#994e3d"
            :dark="isDark"
            @click="changePage('/')"
            >{{ t('nav.home') }}</el-button
          >
          <el-button
            class="text-xl"
            size="large"
            color="#994e3d"
            :dark="isDark"
            @click="changePage('/products')"
            >{{ t('go_shopping') }}</el-button
          >
        </div>
      </el-row>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const changePage = (link) => {
  router.push(link)
}
</script>