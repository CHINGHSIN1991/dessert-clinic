<script setup lang="ts">
import { ref } from 'vue';
const isMenuOpen = ref(false);
const isDark = ref(false);

const sections = [{
  title: '產品介紹',
  url: 'products',
  items: [
    {
      label: '鮮奶油蛋糕',
      url: '/products/cream-cake',
    }, {
      label: '巴斯克蛋糕',
      url: '/products/basque',
    }, {
      label: '餅乾',
      url: '/products/cookie',
    }
  ]
}, {
  title: '關於我們',
  url: 'about',
  items: [
    {
      label: '品牌故事',
      url: '/about/brand',
    }, {
      label: '常見問題',
      url: '/about/qna',
    }, {
      label: '聯絡我們',
      url: '/about/contact',
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
  url: 'member',
  items: [
    {
      label: '註冊/登入',
      url: '/member/login',
    }, {
      label: '會員資訊',
      url: '/member/member-detail'
    }, {
      label: '訂單查詢',
      url: '/member/test1',
    }, {
      label: '購物車',
      url: '/member/cart',
    }
  ]
}];
const onMenuClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div>
    <div class="border-2 border-slate-600 mx-4 mt-4 flex items-center justify-between mb-0">
      <div class="flex justify-between w-full h-[36px] items-center border-r-2 border-slate-600">
        <LanguageMenu />
        <NuxtLink to="/">
          <img src="@/assets/kuanLOGO.png" alt="" class="w-20 object-contain mx-4">
        </NuxtLink>
        <div>
          <Button variant="ghost">Log out</Button>
        </div>
      </div>
      <Button variant="ghost" @click="onMenuClick" class="px-5 hover:bg-slate-600 hover:text-white">
        menu
      </Button>
    </div>
    <transition name="menu">
      <div v-if="isMenuOpen" class="flex w-full align-top overflow-hidden absolute">
        <NavBarMenuSection v-for="section in sections" :section="section" :key="section.title" />
      </div>
    </transition>
  </div>

</template>

<style scoped>
/* 定義 transition 動畫 */
.menu-enter-active,
.menu-leave-active {
  transition: height 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  height: 0;
  overflow: hidden;
}

.menu-enter-to,
.menu-leave-from {
  height: auto;
  overflow: hidden;
}
</style>