<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  item: any;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="border">
    <NuxtLink :to="item.url">{{ $t(item.label_string) }}</NuxtLink>
  </div>
</template>

<style scoped></style>