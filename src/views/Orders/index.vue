<template>
  <h1 class="text-center text-2xl font-semibold pt-4">{{ t('back.orders_list') }}</h1>
  <div class="container">
    <el-button plain class="mb-4" @click="open">{{ t('back.delete_allorders') }}</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="time" :label="t('back.purchase_time')" />
      <el-table-column prop="email" :label="t('info.email')" />
      <el-table-column prop="items" :label="t('back.purchase_items')" />
      <el-table-column prop="price" :label="t('back.amount_payable')" />
      <el-table-column prop="edit" :label="t('product_edit')" />
    </el-table>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElMessageBox } from 'element-plus'

const { t } = useI18n()
const open = () => {
  ElMessageBox.confirm('是否刪除所有訂單?', '警告', {
    confirmButtonText: t('back.confirm'),
    cancelButtonText: t('back.cancel'),
    type: 'warning'
  })
    .then(() => {
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
</script>