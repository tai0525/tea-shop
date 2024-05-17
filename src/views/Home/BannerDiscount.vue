<template>
  <section class="container bg-coupon bg-cover mt-3 md:mt-5 sm:px-0">
    <div class="grid grid-rows-1 justify-center">
      <div class="p-3 md:p-5">
        <div class="flex grid grid-cols-1 justify-center items-center">
          <p class="font-medium text-3xl py-2">
            歡慶開幕，限時 <span class="text-red-600 font-bold"> 5折 </span>優惠
          </p>
          <p class="font-medium text-red-600 text-3xl text-center py-4">立刻領取折價券</p>
          <button
            class="select-none rounded-lg bg-secondary p-3 text-center align-middle font-sans text-xl font-bold text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            @click="getCoupon"
          >
            {{ t('click_me') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
