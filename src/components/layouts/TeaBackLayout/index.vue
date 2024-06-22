<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <tea-back-aside />
    <el-container class="flex-col">
      <router-view />
    </el-container>
  </el-container>
</template>

<script setup>
import TeaBackAside from './TeaBackAside.vue'
</script>