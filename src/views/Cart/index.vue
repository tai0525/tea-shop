<template>
  <div>
    <el-button @click="visible = true"> 點我 </el-button>
    <el-drawer v-model="visible" :show-close="false">
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass" class="font-bold text-2xl">{{ t('cart') }}</h4>
        <el-button @click="close">
          <el-icon class="el-icon--left text-main"><CircleClose /></el-icon>
        </el-button>
      </template>
      <div class="text-end">
        <el-button class="text-main border-main"> {{ t('clear_cart') }} </el-button>
      </div>
      <div class="relative h-75">
        <!-- 購物車無商品 -->
        <div class="text-center absolute top-10 start-28">
          <p class="my-10 font-bold text-2xl">{{ t('no_product') }}</p>
          <el-button
            class="text-xl"
            size="large"
            color="#994e3d"
            :dark="isDark"
            @click="changePage(item.link)"
            >{{ t('go_shopping') }}</el-button
          >
        </div>
        <!-- 購物車有商品 -->
        <div>
          <ul>
            <li class="flex items-center mb-2 pb-2 border-b">
              <div class="w-auto me-4">
                <img
                  class="object-cover w-20 h-20"
                  src="https://shoplineimg.com/58379d81617069988a982900/5a3cdde09f9a4ffb4e002adb/800x.jpg?"
                />
              </div>
              <div class="flex justify-between items-center w-full">
                <div>
                  <p>阿里山清香烏龍茶</p>
                  <span>1 x</span>
                  <span>NT$ 100</span>
                </div>
                <el-icon :size="25"><Delete /></el-icon>
              </div>
            </li>
          </ul>
          <div class="mt-4">
            <p class="text-end text-bold text-2xl">{{ t('total') }}: $100</p>
            <el-button
              class="my-3 rounded-lg w-full text-xl"
              size="large"
              color="#994e3d"
              :dark="isDark"
              >{{ t('go_checkout') }}</el-button
            >
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CircleClose } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const visible = ref(false)
</script>
