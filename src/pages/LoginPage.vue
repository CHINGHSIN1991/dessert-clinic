<script setup lang="ts">
import { ref, unref } from 'vue';
import { supabase } from '../supabase';
import router from '../router';

const email = ref('');
const password = ref('');

// const handleSignin = () => {
//   console.log('signIn test');
// };

const handleSignup = async () => {
  try {
    const { error } = await supabase.auth.signUp({
      email: unref(email),
      password: unref(password)
    });
    if (error) throw error;
    router.push('/');
  } catch (error: any) {
    alert(error.message);
  }
}

</script>

<template>
  <form @submit.prevent="handleSignup">
    <div>
      <label for="email">
        Email
      </label>
      <input id="email" type="email" placeholder="email" v-model="email" />
    </div>
    <div>
      <label for="password">
        Password
      </label>
      <input id="password" type="password" placeholder="*********" v-model="password" />
    </div>
    <button type="submit">
      Sign In
    </button>
  </form>
</template>