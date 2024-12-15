<script setup lang="ts">
const route = useRoute();
const { data } = useFetch<any>(`https://vue-lessons-api.vercel.app/courses/${route.params.id}`);

</script>

<template>
  <div>
    <h1>{{ route.fullPath }}</h1>
    <p>{{ data }}</p>
    <NuxtLink :to="`/product/${route.params.id}/`">內頁介紹</NuxtLink>
    <br>
    <NuxtLink :to="`/product/${route.params.id}/A`">A</NuxtLink>
    <br>
    <NuxtLink :to="`/product/${route.params.id}/B`">B</NuxtLink>
    <br>
    <NuxtLink :to="`/product/${route.params.id}/C`">C</NuxtLink>
    <NuxtPage />
  </div>
</template>

<style scoped></style>
