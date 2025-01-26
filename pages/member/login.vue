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
      <Card class="w-[400px]">
        <CardHeader>
          <CardTitle>{{ isNewUser ? $t('auth.create-account') : $t('auth.sign-in') }}</CardTitle>
          <CardDescription v-if="isNewUser">
            {{ $t('auth.already-have-account') }}
            <Button variant="link" class="px-1" @click="setToLogin">{{ $t('auth.sign-in') }}</Button>
          </CardDescription>
          <CardDescription v-else>
            {{ $t('auth.dont-have-account') }}
            <Button variant="link" class="px-1" @click="setToSignin">{{ $t('auth.sign-up-free') }}</Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid items-center w-full gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">{{ $t('auth.name') }}</Label>
                <Input id="name" :placeholder="$t('auth.name-placeholder')" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="name">{{ $t('auth.email') }}</Label>
                <Input id="username" type="text" :placeholder="$t('auth.email-placeholder')" v-model="email" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="name">{{ $t('auth.password') }}</Label>
                <Input id="password" type="password" :placeholder="$t('auth.password-placeholder')"
                  v-model="password" />
              </div>
              <div v-if="isNewUser" class="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label for="terms" color="gray">{{ $t('auth.newsletter-signup') }}</Label>
              </div>
              <div v-else class="flex items-center space-x-2">
                <Button variant="link" @click="setToLogin" class="px-0">{{ $t('auth.forgot-password') }}</Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex flex-col px-6 py-6">
          <Button v-if="isNewUser" type="button" class="w-full" @click="handleSignUp">{{ $t('auth.sign-up') }}</Button>
          <Button v-else type="button" class="w-full" @click="handleLogin">{{ $t('auth.login') }}</Button>
        </CardFooter>
      </Card>
    </div>
    <div class="border-2 border-slate-600">
    </div>
  </div>
</template>

<style scoped></style>