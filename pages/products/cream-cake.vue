<script setup lang="ts">
const { data } = useFetch<any>('https://vue-lessons-api.vercel.app/courses/list');
</script>

<template>
  <div>
    <h1>Page: cream-cake</h1>
    <section>
      <CardList :courses="data" />
    </section>
  </div>
</template>

<style scoped></style>