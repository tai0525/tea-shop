<!-- <template>
  <el-card :body-style="{ padding: '10px' }" shadow="hover" class="m-3">
    <img
      @click="cardClick"
      :src="image"
      class="object-cover w-[300px] h-[250px] object-cover cursor-pointer"
    />
    <div class="text-center text-main text-lg font-semibold py-2">{{ name }}</div>
    <el-row class="justify-between pt-2 font-semibold text-lg"
      >NT${{ price }}
      <el-button color="#994e3d" :dark="isDark" @click="addToCart">{{ t('add_cart') }}</el-button>
    </el-row>
  </el-card>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  image: {
    type: String
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: String
  }
})

const emit = defineEmits(['cardClick', 'addClick'])
const cardClick = (item) => {
  emit('cardClick', item)
}
const addToCart = () => {
  emit('addClick')
}
</script> -->
<template>
  <el-card :body-style="{ padding: '10px' }" shadow="hover" class="m-3">
    <img
      @click="cardClick"
      :src="image"
      class="object-cover w-[300px] h-[250px] object-cover cursor-pointer"
    />
    <div class="text-center text-main text-lg font-semibold py-2">{{ name }}</div>
    <el-row class="justify-between pt-2 font-semibold text-lg">
      NT${{ price }}
      <el-button color="#994e3d" :dark="isDark" @click="addToCart">{{ t('add_cart') }}</el-button>
    </el-row>
  </el-card>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  id: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: String
  }
})

const emit = defineEmits(['cardClick', 'addClick'])
const cardClick = (item) => {
  emit('cardClick', item)
}
const addToCart = () => {
  emit('addClick')
}
</script>
