<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  section: any;
  current: string;
}

const props = defineProps<Props>();

const isCurrent = computed(() => props.section.url === props.current);
</script>

<template>
  <div class="basic-layout w-full bg-white" :class="`${isCurrent ? 'h-screen' : 'h-full'}`">
    <NavBarMenuItem v-for="item in section.items" :item="item" :key="item.label" />
    <div>
      {{ $t(section.title_string) }}
      {{ JSON.stringify(isCurrent) }}
    </div>
  </div>
</template>

<style scoped></style>
