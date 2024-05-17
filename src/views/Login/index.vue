<template>
  <div
    class="flex justify-center items-center h-screen bg-center bg-no-repeat bg-[url('https://i.pinimg.com/564x/1b/fd/3c/1bfd3cda9146c40b5759244349318146.jpg')] bg-cover"
  >
    <div
      class="absolute w-80 box-border shadow-lg shadow-slate-950 p-4 rounded-md border-solid border-2 border-stone-200"
    >
      <h1 class="text-center text-2xl text-gray-700 font-semibold pb-2">{{ t('first_login') }}</h1>
      <el-form
        ref="formRef"
        style="max-width: 300px"
        :model="validateForm"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item
          label="帳號"
          prop="email"
          :rules="[{ type: 'email', message: 'Please input correct email address' }]"
        >
          <el-input v-model="validateForm.email" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密碼" prop="password" :rules="[]">
          <el-input v-model="validateForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <div class="button">
          <el-form-item class="grid justify-items-center">
            <el-button @click="submitForm(formRef)">{{ t('submit') }}</el-button>
            <el-button>{{ t('home') }}</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

  
  <script setup>
import { useI18n } from 'vue-i18n'
import { reactive, ref } from 'vue'

const { t } = useI18n()

const formRef = ref()

const validateForm = reactive({
  email: ''
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

  