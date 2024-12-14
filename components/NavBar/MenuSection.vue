<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  section: any;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="basic-layout w-full h-full bg-white">
    <NavBarMenuItem v-for="item in section.items" :item="item" :key="item.label" />
    <div>
      {{ $t(section.title_string) }}
    </div>
  </div>
</template>

<style scoped></style>
