<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="border-2 border-green-400 m-2 w-full">
    {{ props.title }}
  </div>
</template>

<style scoped></style>
