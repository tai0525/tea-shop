<template>
  <div class="container">
    <el-row class="flex items-center my-5">
      <el-col :span="4">
        <h5 class="my-2 text-center">產品分類</h5>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <span>全部</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span>阿里山茶系列</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span>凍頂烏龍茶系列</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>台灣紅茶系列</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span>茶具全系列</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
