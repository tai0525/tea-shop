<!-- <template>
  <banner-view />
  <banner-discount />
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
  />
  <tea-carousel />
</template>

<script setup>
import BannerView from './BannerView.vue'
import BannerDiscount from './BannerDiscount.vue'
import TeaSearchBtn from '@/components/TeaSearchBtn/index.vue'
import TeaIntroCard from '@/components/TeaIntroCard/index.vue'
import TeaCarousel from '@/components/TeaCarousel/index.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const TeaIntroCardList = ref([
  {
    image:
      'https://images.unsplash.com/photo-1635756227689-01eda5140530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYSUyMGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D',
    title: '百分之百台灣茶',
    desc: '堅持晴天採收一心二葉茶青，\n台灣在地茶農，天然健康，\n絕無添加物，無混茶。',
    btnTitle: t('nav.tea_knowledge'),
    page: '/knowledge'
  },
  {
    image:
      'https://images.unsplash.com/photo-1437315306147-0923bdb3fc12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYSUyMGxlYXZlc3xlbnwwfHwwfHx8MA%3D%3D',
    title: ' 追求好茶，沒有終點 ',
    desc: ' 茶好，價格也要漂亮， \n 不論初學者或饕客， \n 台灣好茶，都能輕鬆入手。 ',
    btnTitle: t('nav.about_us'),
    page: '/about',
    isReverse: true
  }
])
</script> -->

<template>
  <banner-view />
  <banner-discount />
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
import BannerDiscount from './BannerDiscount.vue'
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
    title: '百分之百台灣茶',
    desc: '堅持晴天採收一心二葉茶青，\n台灣在地茶農，天然健康，\n絕無添加物，無混茶。',
    btnTitle: t('nav.tea_knowledge'),
    page: '/knowledge'
  },
  {
    image:
      'https://images.unsplash.com/photo-1437315306147-0923bdb3fc12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYSUyMGxlYXZlc3xlbnwwfHwwfHx8MA%3D%3D',
    title: '追求好茶，沒有終點',
    desc: '茶好，價格也要漂亮，\n不論初學者或饕客，\n台灣好茶，都能輕鬆入手。',
    btnTitle: t('nav.about_us'),
    page: '/about',
    isReverse: true
  }
])

const btnClick = (page) => {
  router.push(page)
}
</script>

