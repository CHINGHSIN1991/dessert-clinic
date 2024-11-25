<script setup lang="ts">
import { ref } from 'vue';
const isMenuOpen = ref(false);

const sections = [{
  title: '產品介紹',
  items: [
    {
      label: '鮮奶油蛋糕',
      url: 'cream-cake',
    }, {
      label: '巴斯克蛋糕',
      url: 'basque',
    }, {
      label: '餅乾',
      url: 'cookie',
    }
  ]
}, {
  title: '關於我們',
  items: [
    {
      label: '品牌故事',
      url: 'brand',
    }, {
      label: '測試測試',
      url: 'test1',
    }
  ]
}];
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
      <div class="flex w-full align-top overflow-hidden absolute" :class="isMenuOpen ? 'h-100' : 'h-0'">
        <NavBarMenuSection v-for="section in sections" :section="section" :key="section.title" />
      </div>
    </transition>
  </div>

</template>