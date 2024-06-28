<template>
  <el-form :model="ruleForm" :rules="rules" label-width="100px">
    <el-form-item :label="t('info.email')" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item :label="t('info.name')" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item :label="t('info.phone')" prop="phone">
      <el-input v-model="ruleForm.phone" />
    </el-form-item>
    <el-form-item :label="t('info.address')" prop="address">
      <el-input v-model="ruleForm.address" />
    </el-form-item>
    <el-form-item :label="t('info.pay')" prop="pay">
      <el-select v-model="ruleForm.pay" :placeholder="t('form.option_pay')">
        <el-option :label="t('form.credit')" :value="t('form.credit')" />
        <el-option :label="t('form.atm')" :value="t('form.atm')" />
        <el-option :label="t('form.cvs')" :value="t('form.cvs')" />
      </el-select>
    </el-form-item>
    <el-form-item :label="t('info.note')" prop="note">
      <el-input type="textarea" v-model="ruleForm.note" :rows="5" />
    </el-form-item>
    <el-button type="danger" class="absolute right-0" @click="submit">{{
      t('form.submit_order')
    }}</el-button>
  </el-form>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const emit = defineEmits('submit')

const ruleForm = reactive({
  email: '',
  name: '',
  phone: '',
  address: '',
  pay: '',
  note: ''
})

const submit = () => {
  const orderTime = {
    ...ruleForm,
    time: new Date().toISOString()
  }
  emit('submit', { ruleForm: orderTime })
}
const rules = {
  email: [
    { required: true, message: t('form.email'), trigger: 'blur' },
    { type: 'email', message: t('form.correct_email'), trigger: ['blur', 'change'] }
  ],
  name: [
    { required: true, message: t('form.name'), trigger: 'blur' },
    { min: 2, max: 5, message: t('form.name_length'), trigger: 'blur' }
  ],
  phone: [
    { required: true, message: t('form.phone'), trigger: 'blur' },
    { max: 10, message: t('form.correct_length'), trigger: 'blur' }
  ],
  address: [
    { required: true, message: t('form.address'), trigger: 'blur' },
    { message: t('form.correct_address'), trigger: 'blur' }
  ],
  pay: [{ required: true, message: t('form.pay'), trigger: 'blur' }],
  note: [{ required: false }]
}
</script>
