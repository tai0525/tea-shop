<template>
  <el-result :title="t('back.not_found')" class="font-bold">
    <template #icon>
      <el-image
        src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
      />
    </template>
    <template #extra>
      <el-button color="#994e3d" :dark="isDark" @click="changePage('/back')">{{
        t('back.back')
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
  