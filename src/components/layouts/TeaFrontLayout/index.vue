<template>
  <tea-header />
  <slot />
  <tea-footer />
</template>
<script setup>
import TeaHeader from './TeaHeader.vue'
import TeaFooter from './TeaFooter.vue'
</script>
