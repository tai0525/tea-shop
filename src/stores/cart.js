import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCart } from '@/utils/localStorage'


export const useCartStore = defineStore('cart', () => {

    const cart = ref(getCart() || [])
    const setToCart = (products) => {
        cart.value = products
    }

    return { cart, setToCart }

})