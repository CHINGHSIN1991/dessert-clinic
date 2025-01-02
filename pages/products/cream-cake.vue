<script setup lang="ts">
const { data } = useFetch<any>('https://vue-lessons-api.vercel.app/courses/list');
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600">
    </div>
    <div class="border-2 border-slate-600 col-span-3">
      CREAM CAKE
    </div>
  </div>
</template>

<style scoped></style>