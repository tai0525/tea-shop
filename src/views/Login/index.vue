<template>
  <div
    class="flex justify-center items-center h-screen bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1521684415672-2306f06332a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHRlYSUyMGNlcmVtb255fGVufDB8MHwwfHx8MA%3D%3D')] bg-cover bg-amber-200 bg-blend-multiply"
  >
    <div
      class="absolute w-80 box-border shadow-lg shadow-slate-950 p-4 rounded-md border-solid border-2 border-stone-200 text-orange-600"
    >
      <h1 class="text-center text-2xl font-semibold pb-2">{{ t('login.first_login') }}</h1>

      <el-form
        ref="formRef"
        style="max-width: 300px"
        :model="validateForm"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item
          :label="t('login.account')"
          prop="email"
          :rules="[
            { type: 'email', required: true, message: t('message.input_account'), trigger: 'blur' }
          ]"
        >
          <el-input v-model="validateForm.email" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item
          :label="t('login.password')"
          prop="password"
          :rules="[{ required: true, message: t('message.input_password'), trigger: 'blur' }]"
        >
          <el-input v-model="validateForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="grid justify-items-center">
          <el-button @click="submitForm(formRef)">{{ t('submit') }}</el-button>
          <el-button @click="changePage('/')">{{ t('nav.home') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

  
<script setup>
import { useI18n } from 'vue-i18n'
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { userApi } from '@/api/module/user'
import { setToken, getIsAdmin } from '@/utils/localStorage'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const router = useRouter()

const formRef = ref(null)

const validateForm = reactive({
  email: '',
  password: ''
})
const userStore = useUserStore()

const login = async () => {
  const { code, data } = await userApi.login(validateForm.email)
  if (code === 200) {
    const { token } = data
    // 更新數據
    setToken(token)
  }
  //重新渲染
  userStore.setIsLogin(true)
  const isAdmin = getIsAdmin()
  if (isAdmin) {
    router.push('/back/backproducts')
  } else {
    router.push('/')
  }
}
const changePage = (link) => {
  router.push(link)
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      login()
      console.log('submit!')
      ElMessage({
        message: t('message.login_success'),
        type: 'success'
      })
    } else {
      console.log('error submit!')
      ElMessage({
        message: t('message.login_fail'),
        type: 'error'
      })
      return false
    }
  })
}
</script>