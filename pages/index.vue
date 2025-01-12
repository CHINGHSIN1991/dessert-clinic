<script setup lang="ts">
import type { Product } from '~/types';

const featuredProducts = ref<Product[]>([]);

const currentSlide = ref(0);
const banners = [
  {
    image: '/images/banner1.jpg',
    title: 'home-banner-1-title',
    description: 'home-banner-1-description'
  },
  {
    image: '/images/banner2.jpg',
    title: 'home-banner-2-title',
    description: 'home-banner-2-description'
  }
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % banners.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0
    ? banners.length - 1
    : currentSlide.value - 1;
};

onMounted(() => {
  const interval = setInterval(nextSlide, 5000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600 col-span-4">
      <!-- 添加 h-[calc(100vh-theme(spacing.32))] 來計算正確高度 -->
      <div class="h-[calc(100vh-theme(spacing.32))] overflow-y-auto">
        <div class="flex flex-col gap-12">
          <div class="relative h-[calc(100vh-theme(spacing.40))] overflow-hidden">
            <TransitionGroup name="fade">
              <div v-for="(banner, index) in banners" v-show="currentSlide === index" :key="banner.title"
                class="absolute inset-0">
                <img :src="banner.image" class="w-full h-full object-cover" :alt="$t(banner.title)">
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
                  <div class="text-center space-y-4 max-w-2xl px-4">
                    <h1 class="text-4xl font-bold font-huninn">{{ $t(banner.title) }}</h1>
                    <p class="text-xl font-serif">{{ $t(banner.description) }}</p>
                  </div>
                </div>
              </div>
            </TransitionGroup>

            <!-- 輪播控制按鈕 -->
            <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              <button v-for="(_, index) in banners" :key="index" @click="currentSlide = index"
                class="w-3 h-3 rounded-full" :class="currentSlide === index ? 'bg-white' : 'bg-white/50'">
              </button>
            </div>
          </div>

          <section class="px-6">
            <div class="mx-auto">
              <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('featured-products') }}</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
              </div>
            </div>
          </section>

          <section class="bg-slate-50 py-16 px-6">
            <div class="mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                  <h2 class="text-3xl font-bold">{{ $t('brand-story-title') }}</h2>
                  <p class="text-gray-600">{{ $t('brand-story-description') }}</p>
                  <Button variant="outline">{{ $t('learn-more') }}</Button>
                </div>
                <div class="aspect-square">
                  <img src="" alt="Brand Story" class="w-full h-full object-cover rounded-lg">
                </div>
              </div>
            </div>
          </section>

          <section class="px-6 pb-16">
            <div class="mx-auto">
              <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('latest-news') }}</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="i in 3" :key="i" class="border-2 border-slate-600 p-4 rounded-lg">
                  <div class="aspect-video mb-4">
                    <img src="" class="w-full h-full object-cover rounded">
                  </div>
                  <div class="space-y-2">
                    <h3 class="text-xl font-bold">{{ $t('news-title') }}</h3>
                    <p class="text-gray-600 line-clamp-2">{{ $t('news-description') }}</p>
                    <Button variant="ghost" class="mt-4">{{ $t('read-more') }}</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 自定義滾動條樣式 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* 輪播動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>