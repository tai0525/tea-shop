<template>
  <h2 class="mb-5 font-bold text-center text-3xl">{{ t('cart') }}</h2>
  <!-- 訂單進度 -->
  <div class="mb-5">
    <el-steps :active="step" :space="400" align-center class="justify-center">
      <el-step title="填寫訂單" />
      <el-step title="完成訂單" />
    </el-steps>
  </div>
  <!-- 訂單資訊 -->
  <section class="md:py-5" v-show="step === 1">
    <div class="container py-5">
      <el-row class="py-5 justify-around">
        <el-col :span="12" class="px-4">
          <tea-order-content :data="tableData" />
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col class="pb-5">
              <tea-order-form @submit="fillForm" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </section>
  <!-- 訂單完成 -->
  <section class="md:py-5" v-if="step === 2">
    <div class="container py-5">
      <el-row class="py-5 justify-between">
        <el-col :span="12" class="px-3">
          <tea-order-content :data="tableData" />
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col class="pb-5">
              <tea-order-info :data="form.data" @previous="previous" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TeaOrderContent from '@/components/TeaOrderContent/index.vue'
import TeaOrderForm from '@/components/TeaOrderForm/index.vue'
import TeaOrderInfo from '@/components/TeaOrderInfo/index.vue'
import { useCartStore } from '@/stores/cart.js'
import { reactive } from 'vue'

const cartStore = useCartStore()
const { t } = useI18n()
const step = ref(1)
const form = reactive({
  data: {}
})
const fillForm = (data) => {
  step.value = 2
  form.data = data.ruleForm
}
const previous = () => {
  step.value = 1
}

const tableData = computed(() => {
  return cartStore.cart.map((product) => ({
    name: product.name,
    quantity: product.quantity,
    price: product.price * product.quantity
  }))
})
</script>