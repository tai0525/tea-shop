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
      <el-input type="textarea" v-model="ruleForm.message" :rows="2"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup>
// 填寫訂單
export default {
  data() {
    return {
      ruleForm: {
        email: '',
        name: '',
        phone: '',
        address: '',
        pay: '',
        message: ''
      },
      rules: {
        email: [
          { required: true, message: '請輸入e-mail', trigger: 'blur' },
          { type: 'email', message: '請輸入正確的e-mail', trigger: ['blur', 'change'] }
        ],
        name: [
          { required: true, message: '請輸入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '長度在3到5個字', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '請輸入電話', trigger: 'blur' },
          { max: 10, message: '長度不能超過10碼', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '請輸入地址', trigger: 'blur' },
          { message: '請輸入正確的地址', trigger: 'blur' }
        ],
        pay: [{ required: true, message: '付款方式為必填', trigger: 'change' }]
      }
    }
  }
}
</script>