<template>
  <el-card>
    <template #header>
      <div class="card-header font-bold text-2xl">
        {{ t('order_content') }}
      </div>
    </template>
    <el-table :data="data" height="250" style="width: 100%">
      <el-table-column prop="name" label="商品名稱" width="180" />
      <el-table-column prop="quantity" label="數量" width="180" />
      <el-table-column prop="price" label="價格" />
    </el-table>
    <template #footer>
      <div class="card-footer font-semibold pt-3 text-end">
        {{ t('total') }} : ${{ totalPrice }}
      </div>
    </template>
  </el-card>
</template> 

<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
const totalPrice = props.data.map((product) => product.price).reduce((prev, curr) => prev + curr, 0)
</script>