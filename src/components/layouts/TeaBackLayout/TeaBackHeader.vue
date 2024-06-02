<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">產品</el-menu-item>
    <el-menu-item index="2">訂單</el-menu-item>
    <el-menu-item index="3">銷售量</el-menu-item>
  </el-menu>
</template>

<script setup>
</script>