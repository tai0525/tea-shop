<template>
  <el-header style="text-align: right; font-size: 12px">
    <h1 class="text-center text-2xl font-semibold pt-4">{{ t('back.products_list') }}</h1>
    <el-button plain @click="centerDialogVisible = true" class="mb-4"
      >{{ t('back.new_product') }}
    </el-button>
    <el-dialog v-model="centerDialogVisible" :title="t('back.add_product')" width="500" center>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">{{ t('back.cancel') }}</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            {{ t('back.confirm') }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </el-header>
  <el-main>
    <el-scrollbar>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" :label="t('product_id')" />
        <el-table-column prop="name" :label="t('product_name')" />
        <el-table-column prop="category" :label="t('product_category')" />
        <el-table-column prop="price" :label="t('product_price')" />
        <el-table-column prop="edit" :label="t('product_edit')" />
      </el-table>
    </el-scrollbar>
  </el-main>
</template>

<script setup>
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const centerDialogVisible = ref(false)
</script>

