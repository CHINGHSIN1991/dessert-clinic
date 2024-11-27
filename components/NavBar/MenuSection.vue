<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  section: any;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="border-2 border-green-400 m-2 w-full h-full">
    <NavBarMenuItem v-for="item in section.items" :item="item" :key="item.label" />
    <div>
      {{ section.title }}
    </div>
  </div>


</template>

<style scoped></style>
