<template>
  <el-header class="bg-main flex items-center justify-end">
    <el-button color="#fff" :icon="Plus" @click="dialogFormVisible = true" class="mb-4">
      {{ t('back.new_product') }}
    </el-button>
    <el-dialog v-model="dialogFormVisible" :title="t('back.add_product')" width="500" align-center>
      <el-form :model="form">
        <el-form-item label="id">
          <el-input v-model="form.id" />
        </el-form-item>
        <el-form-item :label="t('product_name')" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item :label="t('product_category')" prop="category">
          <el-input v-model="form.category" />
        </el-form-item>
        <el-form-item :label="t('product_image')" prop="image">
          <el-input v-model="form.image" />
        </el-form-item>
        <el-form-item :label="t('product_price')" prop="price">
          <el-input v-model="form.price" />
        </el-form-item>
        <el-form-item :label="t('product_size')" prop="size">
          <el-input v-model="form.size" />
        </el-form-item>
        <el-form-item :label="t('product_desc')" prop="desc">
          <el-input type="textarea" :rows="4" v-model="form.desc" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">{{ t('back.cancel') }}</el-button>
          <el-button type="primary" @click="addProduct">{{ t('back.confirm') }}</el-button>
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
      <el-table-column :label="t('product_edit')">
        <template #default="scope">
          <el-button-group>
            <el-button size="small" type="success" @click="editProduct(scope.row)" plain>
              {{ t('product_edit') }}
            </el-button>
            <el-button size="small" type="danger" @click="deleteProduct(scope.row.id)" plain>
              {{ t('back.delete') }}
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </el-main>

  <el-dialog v-model="editDialogVisible" :title="t('back.edit_product')" width="500" align-center>
    <el-form :model="editForm">
      <el-form-item label="id">
        <el-input v-model="editForm.id" disabled />
      </el-form-item>
      <el-form-item :label="t('product_name')" prop="name">
        <el-input v-model="editForm.name" />
      </el-form-item>
      <el-form-item :label="t('product_category')" prop="category">
        <el-input v-model="editForm.category" />
      </el-form-item>
      <el-form-item :label="t('product_image')" prop="image">
        <el-input v-model="editForm.image" />
      </el-form-item>
      <el-form-item :label="t('product_price')" prop="price">
        <el-input v-model="editForm.price" />
      </el-form-item>
      <el-form-item :label="t('product_size')" prop="size">
        <el-input v-model="editForm.size" />
      </el-form-item>
      <el-form-item :label="t('product_desc')" prop="desc">
        <el-input type="textarea" :rows="4" v-model="editForm.desc" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="editDialogVisible = false">{{ t('back.cancel') }}</el-button>
        <el-button type="primary" @click="confirmEdit">
          {{ t('back.confirm') }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getProducts, setProducts } from '@/utils/localStorage'
import { Plus } from '@element-plus/icons-vue'

const { t } = useI18n()
const dialogFormVisible = ref(false)
const editDialogVisible = ref(false)
const form = reactive({
  id: '',
  name: '',
  category: '',
  image: '',
  price: '',
  size: '',
  desc: ''
})

const editForm = reactive({ ...form })

const tableData = ref([])

onMounted(() => {
  tableData.value = getProducts()
})

const addProduct = () => {
  tableData.value.push({ ...form })
  setProducts(tableData.value)
  resetForm()
  dialogFormVisible.value = false
}

const resetForm = () => {
  form.id = ''
  form.name = ''
  form.category = ''
  form.image = ''
  form.price = ''
  form.size = ''
  form.desc = ''
}

const editProduct = (product) => {
  Object.assign(editForm, product)
  editDialogVisible.value = true
}

const confirmEdit = () => {
  tableData.value = tableData.value.map((product) =>
    product.id === editForm.id ? { ...editForm } : product
  )
  setProducts(tableData.value)
  editDialogVisible.value = false
}

const deleteProduct = (id) => {
  tableData.value = tableData.value.filter((product) => product.id !== id)
  setProducts(tableData.value)
}
</script>

