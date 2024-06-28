<template>
  <el-header class="bg-main flex items-center justify-end">
    <el-button type="danger" :icon="Delete" @click="open">{{
      t('back.delete_allorders')
    }}</el-button>
  </el-header>
  <el-main>
    <h1 class="text-center text-2xl font-semibold pb-4">{{ t('back.orders_list') }}</h1>
    <el-table :data="tableData" stripe height="350" style="width: 100%">
      <el-table-column prop="time" :label="t('back.purchase_time')" />
      <el-table-column prop="email" :label="t('info.email')" />
      <el-table-column prop="name" :label="t('info.name')" />
      <el-table-column prop="items" :label="t('back.purchase_items')" />
      <el-table-column prop="totalAmount" :label="t('back.amount_payable')" />
    </el-table>
  </el-main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
import { getOrder, removeOrder } from '@/utils/localStorage'

const { t } = useI18n()
const tableData = ref([])

const getOrderList = () => {
  const orderData = getOrder()
  if (orderData) {
    tableData.value = orderData.map((order) => ({
      time: new Date(order.time).toLocaleString(),
      email: order.email,
      name: order.name,
      items: order.product.map((item) => `${item.name} (${item.quantity})`).join(', '),
      totalAmount: order.product.reduce((total, item) => total + item.price, 0)
    }))
  }
}

const open = () => {
  ElMessageBox.confirm('是否刪除所有訂單?', '警告', {
    confirmButtonText: t('back.confirm'),
    cancelButtonText: t('back.cancel'),
    type: 'warning'
  })
    .then(() => {
      removeOrder()
      tableData.value = []
      ElMessage({
        type: 'success',
        message: t('back.delete_completed')
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t('back.delete_cancel')
      })
    })
}

onMounted(() => {
  getOrderList()
})
</script>





