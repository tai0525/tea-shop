<template>
  <el-card>
    <template #header>
      <div class="card-header font-bold text-2xl">
        {{ t('order_content') }}
      </div>
    </template>
    <el-table :data="tableData" :show-header="false" height="250" style="width: 100%">
      <el-table-column width="150" v-for="item in thead" :key="item.id" :index="id">
        <span>{{ item.name }}</span>
      </el-table-column>
    </el-table>
    <template #footer>
      <div class="card-footer font-semibold pt-3 text-end">{{ t('total') }} : $</div>
    </template>
  </el-card>
</template> 

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const thead = ref([
  {
    id: 1,
    name: '商品名稱'
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