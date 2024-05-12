<template>
  <!-- container for all cards -->
  <div class="container mx-auto flex flex-col">
    <!-- card -->
    <div
      class="w-100 mx-2 mt-4 flex flex-col bg-white shadow-xl"
      :style="{ flexDirection: isReverse ? 'row-reverse' : 'row' }"
    >
      <!-- media -->
      <div class="h-64 w-auto md:w-1/2">
        <img class="inset-0 h-full w-full object-cover object-center" :src="image" />
      </div>
      <!-- content -->
      <div class="flex flex-col justify-center items-center px-6 py-2 md:w-1/2">
        <h2 class="text-2xl font-semibold text-center text-main">{{ title }}</h2>
        <p class="text-xl text-center md:p-5" style="white-space: pre-wrap">{{ desc }}</p>
        <el-button
          class="text-xl"
          size="large"
          color="#994e3d"
          :dark="isDark"
          @click="btnClick(page)"
        >
          {{ btnTitle }}</el-button
        >
      </div>
    </div>
    <!--/ card-->
  </div>
  <!--/ flex-->
</template>


  <script setup>
import { ElButton } from 'element-plus'
import { defineProps, defineEmits } from 'vue'

defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  btnTitle: {
    type: String,
    default: ''
  },
  page: {
    type: String,
    default: ''
  },
  isReverse: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['btnClick'])
const btnClick = (item) => {
  emit('btnClick', item)
}
</script>