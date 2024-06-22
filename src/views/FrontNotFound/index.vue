<template>
  <el-result>
    <template #icon>
      <el-image
        src="https://static.vecteezy.com/system/resources/thumbnails/011/314/470/small_2x/illustrations-frustrated-expression-woman-for-oops-404-error-design-concept-landing-page-vector.jpg"
      />
    </template>
    <template #extra>
      <el-button class="px-" color="#994e3d" :dark="isDark" @click="changePage('/')">{{
        t('nav.home')
      }}</el-button>
      <el-button color="#994e3d" :dark="isDark" @click="changePage('/products')">{{
        t('go_shopping')
      }}</el-button>
    </template>
  </el-result>
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
  