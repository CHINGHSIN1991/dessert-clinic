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
      return 'h-screen';
    case statusStore.isMenuOpen:
      return 'h-full';
    default:
      return 'h-0 border-0 border-transparent';
  }
};
</script>

<template>
  <div class="basic-layout w-full bg-white overflow-hidden transition duration-200 ease-in-out"
    :class="getSectionHeight()">
    <NavBarMenuItem v-for="item in section.items" :item="item" :key="item.label" />
    <div>
      {{ $t(section.title_string) }}
      {{ JSON.stringify(isCurrent) }}
    </div>
  </div>
</template>

<style scoped></style>
