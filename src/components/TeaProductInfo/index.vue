<template>
  <section class="py-5 bg-secondary">
    <div class="container px-6">
      <el-row class="">
        <el-col :span="12" class="md:cols-6">
          <div class="items-align px-5">
            <h3 class="text-2xl font-bold pb-5">{{ t('product_info') }}</h3>
            <ul class="list-disc">
              <li v-for="item in infoList" :key="item.id" class="py-2">{{ item.name }}</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12" class="md:cols-6">
          <div class="items-align px-5">
            <h3 class="text-2xl font-bold pb-5">{{ t('make_tea.tips') }}</h3>
            <ul class="list-disc">
              <li v-for="item in tipsList" :key="item.id" class="py-2">{{ item.name }}</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const infoList = ref([
  {
    id: 1,
    name: t('material_tea')
  },
  {
    id: 2,
    name: t('origin_tw')
  },
  {
    id: 3,
    name: t('exp_date')
  },
  {
    id: 4,
    name: t('storage_method')
  }
])
const tipsList = ref([
  {
    id: 1,
    name: t('make_tea.boiling')
  },
  {
    id: 2,
    name: t('make_tea.pot_body')
  },
  {
    id: 3,
    name: t('make_tea.rush')
  }
])
</script>