<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/products">Products</RouterLink>
  <RouterLink to="/checkout">Checkout</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
  <RouterLink to="/admin">Admin</RouterLink>
  <header>NavigationBar</header>
</template>
