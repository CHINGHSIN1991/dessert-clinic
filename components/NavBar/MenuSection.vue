<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  section: any;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="border-2 border-green-400 m-2 w-full h-full">
    <NuxtLink :to="item.url" v-for="item in section.items" :key="item.label">{{ item.label }}</NuxtLink>
    <div>
      {{ props.section.title }}
    </div>
  </div>


</template>

<style scoped></style>
