<template>
  <div class="login-box">
    <h1>請先登入</h1>
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
        <el-form-item>
          <el-button @click="submitForm(formRef)">送出</el-button>
          <el-button
            ><RouterLink to="/" class="w-100 btn btn-primary">回首頁</RouterLink></el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

  
  <script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const validateForm = reactive({
  email: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
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

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgb(219, 212, 112);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  h1 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .button {
    margin: 10px 0 0 30%;
    // padding: 10px 60px;
  }
}
</style>
  