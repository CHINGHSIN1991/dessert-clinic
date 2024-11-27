<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  item: any;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="border">
    <NuxtLink :to="item.url">{{ item.label }}</NuxtLink>
  </div>
</template>

<style scoped></style>