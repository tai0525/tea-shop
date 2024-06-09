<template>
  <div class="container">
    <el-row class="items-center my-5" :gutter="20">
      <el-col :span="4">
        <h5 class="my-2 absolute top-0">產品分類</h5>
        <el-menu class="el-menu-vertical-demo absolute top-10">
          <el-menu-item
            v-for="item in categoryMenu"
            :key="item.id"
            :index="id"
            @click="categoryClick(item.name)"
          >
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-row>
          <tea-product-card
            @card-click="goToProduct(item.id)"
            @add-click="addToCart(item.id)"
            v-for="item in teaCards"
            :key="item.id"
            :image="item.image"
            :name="item.name"
            :price="item.price"
          />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import TeaProductCard from '@/components/TeaProductCard/index.vue'
import { getProducts, setCart } from '@/utils/localStorage'
import { ElMessage } from 'element-plus'
import { useCartStore } from '@/stores/cart'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { products } = inject('data')
const teaCards = ref(products)
const cartStore = useCartStore()

const categoryClick = (category) => {
  if (category === '全部') {
    teaCards.value = getProducts()
    return
  }
  teaCards.value = getProducts().filter((card) => card.category === category)
}

const router = useRouter()
const goToProduct = (id) => {
  router.push(`/productDetail/${id}`)
}
const addToCart = (id) => {
  const product = products.value.find((product) => product.id === id)
  const cart = cartStore.cart
  if (!cart.length) {
    // 購物車為空
    setCart([
      {
        ...product,
        quantity: 1
      }
    ])
    cartStore.setToCart([
      {
        ...product,
        quantity: 1
      }
    ])
    return
  }
  if (cart.some((product) => product.id === id)) {
    // 如果cart有此商品
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity += 1
        return product
      }
      return product
    })
    setCart([...newCart])
    cartStore.setToCart([...newCart])
  } else {
    // 沒有此商品
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ])
    cartStore.setToCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ])
  }
  ElMessage({
    message: t('add_to_cart'),
    type: 'success'
  })
}

const categoryMenu = ref([
  {
    id: 1,
    name: '全部'
  },
  {
    id: 2,
    name: '阿里山茶系列'
  },
  {
    id: 3,
    name: '凍頂烏龍茶系列'
  },
  {
    id: 4,
    name: '台灣紅茶系列'
  },
  {
    id: 5,
    name: '台灣綠茶系列'
  }
])
</script>
