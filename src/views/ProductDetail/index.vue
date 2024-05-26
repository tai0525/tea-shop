<template>
  <div class="container px-4 py-5">
    <el-row class="mb-2" :gutter="5">
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">{{ t('home') }}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/products' }">
            {{ t('all_product') }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>阿里山系列</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="bg-cover bg-center">
          <img
            src="https://shoplineimg.com/58379d81617069988a982900/5a3cdde09f9a4ffb4e002adb/800x.jpg?"
            alt=""
            class="h-96 py-5"
          />
        </div>
      </el-col>
    </el-row>
    {{ routeId }}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()
const routeId = ref(route.params.id)
</script>