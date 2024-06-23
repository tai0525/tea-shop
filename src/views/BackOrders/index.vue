<template>
  <el-header style="text-align: right; font-size: 12px">
    <h1 class="text-center text-2xl font-semibold pt-4">{{ t('back.orders_list') }}</h1>
    <el-button plain class="mb-4" @click="open">{{ t('back.delete_allorders') }}</el-button>
  </el-header>
  <el-main>
    <el-scrollbar>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="purchaseTime" :label="t('back.purchase_time')" />
        <el-table-column prop="email" :label="t('info.email')" />
        <el-table-column prop="items" :label="t('back.purchase_items')" />
        <el-table-column prop="totalAmount" :label="t('back.amount_payable')" />
        <el-table-column :label="t('product_edit')">
          <template #default="scope">
            <el-button @click="editOrder(scope.row)">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </el-main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getOrder, removeOrder } from '@/utils/localStorage'

const { t } = useI18n()
const tableData = ref([])

const getOrderList = () => {
  const orderData = getOrder()
  if (orderData) {
    tableData.value = [
      {
        purchaseTime: new Date().toLocaleString(),
        email: orderData.email,
        items: orderData.product.map((item) => `${item.name} (${item.quantity})`).join(', '),
        totalAmount: orderData.product.reduce((total, item) => total + item.price, 0)
      }
    ]
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

// const editOrder = (row) => {
//   console.log('Editing order:', row)
// }

onMounted(() => {
  getOrderList()
})
</script>





