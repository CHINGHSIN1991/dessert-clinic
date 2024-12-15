<script setup lang="ts">
const nuxtApp = useNuxtApp();
const isLoading = ref(false);

nuxtApp.hook("page:start", () => {
  // console.log('trigger page:start');
  isLoading.value = true;
});

nuxtApp.hook("page:finish", () => {
  // console.log('trigger page:finish');
  isLoading.value = false;
});

watchEffect(() => {
  // console.log(isLoading.value);
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0" />
    <NavBar />
    <div class="grow flex items-stretch flex-row w-screen">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>