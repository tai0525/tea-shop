<template>
  <el-header class="bg-main flex items-center justify-end">
    <el-button color="#fff" :icon="Plus" @click="dialogFormVisible = true" class="mb-4"
      >{{ t('back.new_product') }}
    </el-button>
    <el-dialog v-model="dialogFormVisible" :title="t('back.add_product')" width="500" align-center>
      <el-form :model="form">
        <el-form-item label="id">
          <el-input v-model="form.id" />
        </el-form-item>
        <el-form-item label="name" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="category" prop="category">
          <el-input v-model="form.category" />
        </el-form-item>
        <el-form-item label="image" prop="image">
          <el-input v-model="form.image" />
        </el-form-item>
        <el-form-item label="price" prop="price">
          <el-input v-model="form.price" />
        </el-form-item>
        <el-form-item label="size" prop="size">
          <el-input v-model="form.size" />
        </el-form-item>
        <el-form-item label="desc" prop="desc">
          <el-input type="textarea" :rows="4" v-model="form.desc" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">{{ t('back.cancel') }}</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            {{ t('back.confirm') }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </el-header>
  <el-main>
    <h1 class="text-center text-2xl font-semibold pb-4">{{ t('back.products_list') }}</h1>
    <el-table :data="tableData" stripe height="350" style="width: 100%">
      <el-table-column prop="id" :label="t('product_id')" />
      <el-table-column prop="name" :label="t('product_name')" />
      <el-table-column prop="category" :label="t('product_category')" />
      <el-table-column prop="price" :label="t('product_price')" />
      <el-table-column prop="edit" :label="t('product_edit')">
        <!-- 編輯用map -->
        <el-button-group>
          <el-button size="small" type="success" plain>
            {{ t('product_edit') }}
          </el-button>
          <el-button size="small" type="danger" plain>
            {{ t('back.delete') }}
          </el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getProducts } from '@/utils/localStorage'
import { Plus } from '@element-plus/icons-vue'

const { t } = useI18n()
// const centerDialogVisible = ref(false)
const dialogFormVisible = ref(false)
const form = reactive({
  id: '',
  name: '',
  category: '',
  image: '',
  price: '',
  size: '',
  desc: ''
})

const tableData = reactive([])

onMounted(() => {
  tableData.push(...getProducts())
})
</script> 

 



