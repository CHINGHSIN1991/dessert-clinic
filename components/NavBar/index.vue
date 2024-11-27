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
      label: '常見問題',
      url: 'qna',
    }, {
      label: '聯絡我們',
      url: 'contact',
    }
  ]
}, {
  title: '最新消息',
  items: [
    {
      label: '團購開團',
      url: 'brand',
    }, {
      label: '出攤消息',
      url: 'test1',
    }, {
      label: '新聞',
      url: 'news',
    }
  ]
}, {
  title: '會員專區',
  items: [
    {
      label: '註冊/登入',
      url: 'login',
    }, {
      label: '訂單查詢',
      url: 'test1',
    }, {
      label: '購物車',
      url: 'cart',
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
        <div>color theme</div>
        <img src="@/assets/kuanLOGO.png" alt="" class="w-20 object-contain mx-4">
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