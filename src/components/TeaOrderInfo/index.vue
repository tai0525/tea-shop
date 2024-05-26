<template>
  <el-card>
    <template #header>
      <div class="card-header font-bold text-2xl">
        {{ t('receipt_info') }}
      </div>
    </template>
    <el-table :data="tableData" :show-header="false" height="250" style="width: 100%">
      <el-table-column width="150" v-for="item in head" :key="item.id" :index="id">
        <span>{{ item.name }}</span>
      </el-table-column>
    </el-table>
    <template #footer>
      <el-button type="danger" @click="next">確認付款</el-button>
    </template>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const head = ref([
  {
    id: 1,
    name: '訂單時間'
  },
  {
    id: 2,
    name: '數量'
  },
  {
    id: 3,
    name: '價格'
  }
])
const tableData = [
  {
    name: '八川綠茶',
    qty: '1',
    price: '500'
  }
]
</script>