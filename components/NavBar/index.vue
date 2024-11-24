<script setup lang="ts">
import { ref } from 'vue';
const isMenuOpen = ref(false);

const onMenuClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div>
    <div class="border-2 border-slate-800 m-2 flex items-center justify-between">
      <div class="flex justify-between w-full h-[36px] items-center border-r-2 border-slate-800">
        <img src="@/assets/kuanLOGO.png" alt="" class="w-20 object-contain mx-4">
        <div>color theme</div>
        <div>language</div>
      </div>
      <Button variant="ghost" @click="onMenuClick" class="px-5 hover:bg-slate-800 hover:text-white">
        menu
      </Button>
    </div>
    <transition>
      <div class="flex w-full align-top overflow-hidden absolute" :class="isMenuOpen ? 'h-10' : 'h-0'">
        <div>121212</div>
        <NavBarMenuSection title="產品介紹" />
      </div>
    </transition>
  </div>

</template>