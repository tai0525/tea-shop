<template>
  <div class="container">
    <el-row class="flex items-center my-5">
      <el-col :span="4">
        <h5 class="my-2 text-center">產品分類</h5>
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item v-for="item in categoryMenu" :key="item.id" :index="id">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categoryMenu = ref([
  {
    id: 1,
    name: '全部'
  },
  {
    id: 2,
    name: '阿里山茶系列'
  },
  {
    id: 3,
    name: '凍頂烏龍茶系列'
  },
  {
    id: 4,
    name: '台灣紅茶系列'
  },
  {
    id: 5,
    name: '茶具全系列'
  }
])
</script>
