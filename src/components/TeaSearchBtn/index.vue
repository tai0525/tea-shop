<template>
  <div class="flex my-4 items-center justify-center">
    <el-input
      v-model="inputValue"
      style="width: 340px"
      size="large"
      placeholder="搜尋茶葉"
      :suffix-icon="Search"
      clearable
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const inputValue = ref('')
</script>