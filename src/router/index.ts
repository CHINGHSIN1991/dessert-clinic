import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/ProductPage.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../pages/CheckoutPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router