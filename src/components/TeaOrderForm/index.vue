<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="E-mail" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="收件人姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="收件人電話" prop="phone">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="收件人地址" prop="address">
      <el-input v-model="ruleForm.address"> </el-input>
    </el-form-item>
    <el-form-item label="付款方式" prop="pay">
      <el-select v-model="ruleForm.pay" placeholder="請選擇付款方式">
        <el-option label="信用卡付款" value="card"></el-option>
        <el-option label="ATM 轉帳" value="atm"></el-option>
        <el-option label="超商取貨付款" value="cvs"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="備註" prop="message">
      <el-input type="textarea" v-model="ruleForm.message" :rows="5"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const ruleForm = reactive({
  email: '',
  name: '',
  phone: '',
  address: '',
  pay: '',
  message: ''
})
// 填寫訂單
const rules = {
  email: [
    { required: true, message: t('form.email'), trigger: 'blur' },
    { type: 'email', message: t('form.correct_email'), trigger: ['blur', 'change'] }
  ],
  name: [
    { required: true, message: t('form.name'), trigger: 'blur' },
    { min: 3, max: 5, message: t('form.name_length'), trigger: 'blur' }
  ],
  phone: [
    { required: true, message: t('form.phone'), trigger: 'blur' },
    { max: 10, message: t('form.correct_length'), trigger: 'blur' }
  ],
  address: [
    { required: true, message: t('form.address'), trigger: 'blur' },
    { message: t('form.correct_address'), trigger: 'blur' }
  ],
  pay: [{ required: true, message: t('form.pay'), trigger: 'blur' }]
}
</script>