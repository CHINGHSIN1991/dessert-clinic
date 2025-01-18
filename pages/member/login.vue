<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
const test = useSupabaseUser();

const isNewUser = ref(true);
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

const setToLogin = () => {
  isNewUser.value = false;
};
const setToSignin = () => {
  isNewUser.value = true;
};
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600 col-span-3 flex justify-center items-center">
      <!-- <div class="border flex flex-col items-center w-[400px]">
        <h1>
          Create a new account
        </h1>
        <div class="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label for="username">User name</Label>
          <Input id="username" type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" v-model="password" />
        </div>
        <div class="flex gap-4 flex-col border w-full p-2">
          <Button type="button" class="w-full" @click="handleSignUp">Sign Up</Button>
          <Button type="button" @click="handleLogin">Login</Button>
        </div>
      </div> -->
      <Card class="w-[400px]">
        <CardHeader>
          <CardTitle>{{ isNewUser ? 'Create a new account' : 'Sign in to your account' }}</CardTitle>
          <CardDescription v-if="isNewUser">Already have an account?
            <Button variant="link" class="px-1" @click="setToLogin">Sign in</Button>
          </CardDescription>
          <CardDescription v-else>Don't have an account?
            <Button variant="link" class="px-1" @click="setToSignin">Sign up for free</Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid items-center w-full gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Email</Label>
                <Input id="username" type="text" placeholder="Email" v-model="email" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Password</Label>
                <Input id="password" type="password" placeholder="Password" v-model="password" />
              </div>
              <div v-if="isNewUser" class="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label for="terms" color="gray">I would like to sign up for GreatFrontEnd's newsletter</Label>
              </div>
              <div v-else class="flex items-center space-x-2">
                <Button variant="link" @click="setToLogin" class="px-0">Forget your password ?</Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex flex-col px-6 py-6">
          <Button v-if="isNewUser" type="button" class="w-full" @click="handleSignUp">Sign Up</Button>
          <Button v-else type="button" class="w-full" @click="handleLogin">Login</Button>
        </CardFooter>
      </Card>
    </div>
    <div class="border-2 border-slate-600">
    </div>
  </div>
</template>

<style scoped></style>