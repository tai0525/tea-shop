<template>
  <banner-view />
  <tea-search-btn />
  <tea-intro-card
    v-for="item in TeaIntroCardList"
    :key="item.page"
    :title="item.title"
    :image="item.image"
    :desc="item.desc"
    :btn-title="item.btnTitle"
    :page="item.page"
    :is-reverse="item.isReverse"
    @btnClick="btnClick"
  />
  <tea-carousel />
</template>

<script setup>
import BannerView from './BannerView.vue'
import TeaSearchBtn from '@/components/TeaSearchBtn/index.vue'
import TeaIntroCard from '@/components/TeaIntroCard/index.vue'
import TeaCarousel from '@/components/TeaCarousel/index.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const TeaIntroCardList = ref([
  {
    image:
      'https://images.unsplash.com/photo-1635756227689-01eda5140530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYSUyMGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D',
    title: t('banner.taiwan_tea'),
    desc: t('banner.one_heart'),
    btnTitle: t('nav.tea_knowledge'),
    page: '/knowledge'
  },
  {
    image:
      'https://images.unsplash.com/photo-1437315306147-0923bdb3fc12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYSUyMGxlYXZlc3xlbnwwfHwwfHx8MA%3D%3D',
    title: t('banner.pursuit'),
    desc: t('banner.tea_good'),
    btnTitle: t('nav.about_us'),
    page: '/about',
    isReverse: true
  }
])

const btnClick = (page) => {
  router.push(page)
}
</script>

