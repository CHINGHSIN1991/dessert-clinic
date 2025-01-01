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
    <div class="grow flex items-stretch flex-row w-screen overflow-hidden">
      <Transition name="page" mode="out-in">
        <slot />
      </Transition>
    </div>

  </div>
</template>

<style scoped>
.v-enter-active {
  width: 100%;
  height: 100%;
}

.v-leave-active {
  width: 100%;
  height: 0%;
}

.v-leave-to {
  width: 100%;
  height: 0%;
  transition-delay: 0.3s;
  transition: all 0.5s;
}

.v-leave-from {
  width: 100%;
  height: 100%;
  transition-delay: 0.3s;
  transition: all 0.5s;
}

.v-enter-from {
  width: 100%;
  height: 0%;
  transition: all 0.5s;
}

.v-enter-to {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(60px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>