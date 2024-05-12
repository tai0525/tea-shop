<template>
  <el-carousel>
    <el-carousel-item v-for="item in 4" :key="item">
      <img :src="image" alt="" />
      <span>{{ label }}</span>
      <p>{{ title }}</p>
      <span>{{ price }}</span>
    </el-carousel-item>
  </el-carousel>
</template>
 
  //https://images.unsplash.com/photo-1714423616168-e9a6f38b6806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D
  <script setup>
import { defineProps } from 'vue'
defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  }
})
</script>

<style lang="css" scoped>
</style>
  