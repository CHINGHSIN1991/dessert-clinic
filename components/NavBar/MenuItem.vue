<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  item: any;
}

const props = defineProps<Props>();
</script>

<template>

  <NuxtLink :to="item.url">
    <div class="border p-2">{{ $t(item.label_string) }}</div>
  </NuxtLink>
</template>

<style scoped></style>