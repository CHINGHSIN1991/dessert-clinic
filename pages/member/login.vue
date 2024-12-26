<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
const test = useSupabaseUser();
console.log(test);
const email = ref('');
const password = ref('');

async function signUp(params: any) {
  authStore.signUp({
    email: email.value,
    password: password.value
  });
}

async function login(params: any) {
  authStore.signInWithPassword({
    email: email.value,
    password: password.value,
  });
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600 col-span-3">
      {{ email }}
      {{ password }}
      <form @submit.prevent="signUp">
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Label for="username">User name</Label>
          <Input id="username" type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="pw" v-model="password" />
        </div>
        <Button @click="signUp">Sign Up</Button>
        <Button @click="login">Login</Button>
      </form>
    </div>
    <div class="border-2 border-slate-600">
    </div>
  </div>
</template>

<style scoped></style>