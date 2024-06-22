<template>
  <el-card>
    <template #header>
      <div class="card-header font-bold text-2xl">
        {{ t('receipt_info') }}
      </div>
    </template>
    <el-descriptions direction="vertical">
      <el-descriptions-item :label="t('info.email')">{{ info.email }}</el-descriptions-item>
      <el-descriptions-item :label="t('info.name')">{{ info.name }}</el-descriptions-item>
      <el-descriptions-item :label="t('info.phone')">{{ info.phone }}</el-descriptions-item>
      <el-descriptions-item :label="t('info.address')">{{ info.address }}</el-descriptions-item>
      <el-descriptions-item :label="t('info.pay')">{{ info.pay }}</el-descriptions-item>
      <el-descriptions-item :label="t('info.note')">{{ info.note }}</el-descriptions-item>
    </el-descriptions>
    <template #footer>
      <el-button type="danger" @click="previous">上一步</el-button>
      <el-button type="danger" @click="checkout">確認付款</el-button>
    </template>
  </el-card>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const emit = defineEmits(['previous', 'checkout'])
const previous = () => {
  emit('previous')
}
const checkout = () => {
  emit('checkout')
}
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
const info = reactive({
  name: props.data?.name || '',
  email: props.data?.email || '',
  phone: props.data?.phone || '',
  address: props.data?.address || '',
  pay: props.data?.pay || '',
  note: props.data?.note || ''
})
</script>