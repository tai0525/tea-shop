<template>
  <div class="wrap mx-3-">
    <header
      class="container-none flex py-20 md:items-center justify-center bg-banner bg-cover bg-center bg-fixed"
    >
      <div class="text-white p-10 text-center flex items-center">
        <div class="bg-stone-600/50 relative p-10">
          <span class="text-3xl font-bold">{{ t('slogan') }}</span>
          <div class="pt-5">
            <el-button
              class="text-xl"
              size="large"
              color="#994e3d"
              :dark="isDark"
              @click="changePage('/products')"
              >{{ t('search_tea') }}</el-button
            >
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const router = useRouter() //到此頁面
const changePage = (link) => {
  router.push(link)
}
</script>