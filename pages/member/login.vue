<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
const test = useSupabaseUser();
console.log(test);

const email = ref('');
const password = ref('');

const handleSignUp = async (e: Event) => {
  e.preventDefault();
  await authStore.signUp({
    email: email.value,
    password: password.value
  });
};

const handleLogin = async (e: Event) => {
  e.preventDefault();
  await authStore.signInWithPassword({
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600 col-span-3">
      <div class="p-4">
        <div class="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label for="username">User name</Label>
          <Input id="username" type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" v-model="password" />
        </div>
        <div class="flex gap-4">
          <Button type="button" @click="handleSignUp">Sign Up</Button>
          <Button type="button" @click="handleLogin">Login</Button>
        </div>
      </div>
    </div>
    <div class="border-2 border-slate-600">
    </div>
  </div>
</template>

<style scoped></style>