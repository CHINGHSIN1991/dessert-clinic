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
  <div>
    <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0" />

    <slot />
  </div>
</template>

<style scoped></style>