import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getToken } from 'pinia'



export const useUserStore = defineStore('user', () => {

  const isLogin = ref(getToken) // TODO: 改getToken
  const setIsLogin = (bool) => {
    isLogin.value = bool

  }

  return { isLogin, setIsLogin }

})