<script setup lang="ts">
const statusStore = useStatusStore();

const sections = [{
  title_string: 'section-product-introduction',
  url: 'products',
  items: [
    {
      label_string: 'product-category-cream-cake',
      url: '/products/cream-cake',
    }, {
      label_string: 'product-category-basque',
      url: '/products/basque',
    }, {
      label_string: 'product-category-cookie',
      url: '/products/cookie',
    }
  ]
}, {
  title_string: 'section-about',
  url: 'about',
  items: [
    {
      label_string: 'about-brand',
      url: '/about/brand',
    }, {
      label_string: 'about-faq',
      url: '/about/faq',
    }, {
      label_string: 'about-contact',
      url: '/about/contact',
    }
  ]
}, {
  title_string: 'section-event',
  url: 'event',
  items: [
    {
      label_string: 'event-group-buying',
      url: '/event/group-buying',
    }, {
      label_string: 'event-event',
      url: '/event/event',
    }, {
      label_string: 'event-news',
      url: '/event/news',
    }
  ]
}, {
  title_string: 'section-member',
  url: 'member',
  items: [
    {
      label_string: 'member-login-signup',
      url: '/member/login',
    }, {
      label_string: 'member-detail',
      url: '/member/detail'
    }, {
      label_string: 'member-order',
      url: '/member/orders',
    }, {
      label_string: 'member-cart',
      url: '/member/cart',
    }
  ]
}];
const onMenuClick = () => {
  statusStore.setIsMenuOpen(!statusStore.isMenuOpen);
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
          <Button variant="ghost">{{ $t('logout') }}</Button>
        </div>
      </div>
      <Button variant="ghost" @click="onMenuClick" class="px-5 hover:bg-slate-600 hover:text-white">
        menu
      </Button>
    </div>
    <div class="flex w-full align-top absolute p-2">
      <NavBarMenuSection v-for="section in sections" :section="section" :key="section.title_string" />
    </div>
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