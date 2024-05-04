import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import { supabase } from '../supabase'

let localUser

const router = createRouter({
  history: createWebHistory(),
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
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../pages/AdminPage.vue'),
      meta: { requireAuth: true }
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../pages/UnauthorizedPage.vue')
    },
  ]
})

// getUser
const getUser = async (next: any) => {
  localUser = await supabase.auth.getSession();
  if (localUser.data.session == null){
    next('/unauthorized')
  } else {
    next();
  }
}

// auth requirements
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    getUser(next);
  }
  else {
    next();
  }
})

export default router