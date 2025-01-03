import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userInfo: null as any
  }),
  
  actions: {
    setLoginStatus(status: boolean) {
      this.isLoggedIn = status
    },
    setUserInfo(info: any) {
      this.userInfo = info
    },
    logout() {
      this.isLoggedIn = false
      this.userInfo = null
    }
  }
}) 