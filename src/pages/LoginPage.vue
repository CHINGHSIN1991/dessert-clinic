<script setup lang="ts">
import { ref, unref } from 'vue';
import { supabase } from '../supabase';
import router from '../router';

const email = ref('');
const password = ref('');
const name = ref('');

const handleLogin = async () => {
  console.log('handleLogin');
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: unref(email),
      password: unref(password)
    });
    if (error) throw error;
    console.log(data);
    router.push('/');
  } catch (error: any) {
    alert(error.message);
  }
};

const handleSignup = async () => {
  console.log('handleSignup');
  try {
    const { data, error } = await supabase.auth.signUp({
      email: unref(email),
      password: unref(password),
      options: {
        data: {
          first_name: unref(name),
        }
      },
    });
    if (error) throw error;
    console.log(data);
    router.push('/login');
  } catch (error: any) {
    alert(error.message);
  }
};
const handleLogout = async () => {
  console.log('handleLogout');
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push('/login');
  } catch (error: any) {
    alert(error.message);
  }
};
const seeCurrentUser = async () => {
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
};
</script>

<template>
  <div>
    <label for="email">
      Email:
    </label>
    <input id="email" type="email" placeholder="email" v-model="email" />
  </div>
  <div>
    <label for="password">
      Password:
    </label>
    <input id="password" type="password" placeholder="*********" v-model="password" />
  </div>
  <div>
    <label for="name">
      First Name:
    </label>
    <input id="name" type="name" v-model="name" />
  </div>
  <button @click="handleSignup">
    Create
  </button>
  <button @click="handleLogin">
    Login
  </button>
  <button @click="seeCurrentUser">
    See user
  </button>
  <button @click="handleLogout">
    Logout
  </button>

</template>
