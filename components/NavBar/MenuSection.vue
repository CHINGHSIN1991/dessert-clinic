<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  section: any;
}
const props = defineProps<Props>();

const statusStore = useStatusStore();

const isCurrent = computed(() => props.section.url === statusStore.currentSection);

const getSectionHeight = () => {
  switch (true) {
    case isCurrent.value:
      return 'h-[calc(100vh-88px)] border-slate-600 border-2';
    case statusStore.isMenuOpen:
      return 'h-full border-slate-600 border-2';
    default:
      return 'h-0 border-slate-600 border-0';
  }
};
</script>

<template>
  <div class="m-2 w-full bg-white overflow-hidden transition-all duration-300 ease-in-out" :class="getSectionHeight()">
    <NavBarMenuItem v-for="item in section.items" :item="item" :key="item.label" />
    <div>
      {{ $t(section.title_string) }}
    </div>
  </div>
</template>

<style scoped></style>
