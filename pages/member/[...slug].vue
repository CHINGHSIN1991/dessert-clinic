<script setup>
definePageMeta({
  layout: 'errorpage'
})
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);
</script>

<template>
  <div>
    <h1>404 Not Found</h1>
    <p>{{ route.params.slug }}</p>
    <NuxtLink to="/">Back to home page</NuxtLink>
  </div>
</template>