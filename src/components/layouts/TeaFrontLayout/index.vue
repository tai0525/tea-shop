<template>
  <tea-header />
  <banner-view />
  <banner-discount />
  <slot />
  <tea-footer />
</template>
<script setup>
import TeaHeader from './TeaHeader.vue'
import BannerView from './BannerView.vue'
import BannerDiscount from './BannerDiscount.vue'
import TeaFooter from './TeaFooter.vue'
</script>
