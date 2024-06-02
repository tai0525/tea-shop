<template>
  <div class="wrap">
    <h2 class="mb-5 font-bold text-center text-3xl">{{ t('cart') }}</h2>
    <!-- 訂單進度 -->
    <div class="mb-5">
      <el-steps :active="step" :space="400" align-center class="justify-center">
        <el-step title="填寫訂單" />
        <el-step title="完成訂單" />
      </el-steps>
    </div>
    <!-- 訂單資訊 -->
    <section class="md:py-5" v-if="step === 1">
      <div class="container py-5">
        <el-row class="py-5 justify-around">
          <el-col :span="12" class="px-4">
            <tea-order-content />
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col class="pb-5">
                <tea-order-form />
                <el-button type="danger" class="absolute right-0" @click="next">送出訂單</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
  <!-- 訂單完成 -->
  <div class="wrap">
    <section class="md:py-5" v-if="step === 2">
      <div class="container py-5">
        <el-row class="py-5 justify-between">
          <el-col :span="12" class="px-3">
            <tea-order-content />
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col class="pb-5">
                <tea-order-info />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TeaOrderContent from '@/components/TeaOrderContent/index.vue'
import TeaOrderForm from '@/components/TeaOrderForm/index.vue'
import TeaOrderInfo from '@/components/TeaOrderInfo/index.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)
const { t } = useI18n()
const step = ref(1)
const next = () => {
  step.value = 2
}
</script>