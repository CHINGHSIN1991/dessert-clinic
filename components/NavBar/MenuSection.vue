<script setup lang="ts">
import { defineProps, computed } from 'vue';
interface Props {
  section: any;
  index: number;
}
const props = defineProps<Props>();
const statusStore = useStatusStore();

const getSectionHeight = () => {
  switch (true) {
    case statusStore.isMenuOpen:
      return 'h-[240px] border-slate-600 border-2';
    default:
      return 'h-[0px] border-slate-600 border-0';
  }
};

const getTransitionStyle = computed(() => {
  return {
    transition: 'all 300ms ease-in-out',
    transitionDelay: `${props.index * 30}ms`
  };
});
</script>

<template>
  <div :class="`flex flex-col m-2 w-full bg-white overflow-hidden ${getSectionHeight()}`" :style="getTransitionStyle">
    <NavBarMenuItem v-for="item in section.items" :item="item" :key="item.label" />
    <div class="h-500 border grow">
      <NuxtLink :to="section.url">
        <div class="p-2 text-3xl font-extrabold flex items-end">
          {{ $t(section.title_string) }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
