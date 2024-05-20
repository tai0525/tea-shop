<template>
  <div>
    Product Detail
    {{ routeId }}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const routeId = ref(route.params.id)
</script>