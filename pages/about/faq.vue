<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface FAQSection {
  id: string;
  title: string;
  description: string;
  image: string;
}

const sections = ref<FAQSection[]>([
  {
    id: 'section1',
    title: '關於我們的餅乾',
    description: '我們堅持使用最優質的原料，每一個步驟都充滿著對美食的熱愛...',
    image: '/images/about-1.jpg'
  },
  {
    id: 'section2',
    title: '運送方式',
    description: '為了確保餅乾的新鮮度，我們採用特殊的保鮮包裝...',
    image: '/images/about-2.jpg'
  },
  {
    id: 'section3',
    title: '付款方式',
    description: '我們提供多元的支付方式，讓您選擇最便利的付款方式...',
    image: '/images/about-3.jpg'
  }
]);

</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600">
      <!-- 左側選單 -->
    </div>
    <div class="border-2 border-slate-600 col-span-3">
      <!-- 調整高度以配合 Navbar -->
      <div class="h-[calc(100vh-theme(spacing.32))] overflow-hidden">
        <div class="h-full overflow-y-auto">
          <div class="flex">
            <!-- 滾動內容 -->
            <div class="w-1/2 p-6">
              <div v-for="(section, index) in sections" :key="section.id" :id="`section-${index}`"
                class="min-h-[calc(100vh-theme(spacing.32))] flex items-center">
                <div class="space-y-6 pr-6">
                  <h2 class="text-4xl font-bold font-huninn">{{ section.title }}</h2>
                  <p class="text-xl text-gray-600 leading-relaxed font-serif">
                    {{ section.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- 固定的圖片容器 -->
            <div class="w-1/2 sticky top-0 h-[calc(100vh-theme(spacing.32))] flex items-center p-6">
              <div class="relative w-full h-[600px]">
                <div v-for="(section, index) in sections" :key="section.id" :id="`image-${index}`"
                  class="absolute inset-0 opacity-0 transition-all duration-500">
                  <img :src="section.image" class="w-full h-full object-cover rounded-lg shadow-lg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 平滑滾動 */
.overflow-y-auto {
  scroll-behavior: smooth;
}

/* 自定義滾動條 */
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

/* 確保內容區域不會突出 */
.overflow-hidden {
  mask-image: linear-gradient(to bottom, transparent, black 10px, black 90%, transparent);
}

/* 設定全域預設字體 */
body {
  font-family: 'Noto Sans TC', sans-serif;
}

/* 或者你可以為特定元素設定字體 */
h2 {
  font-family: 'jf-openhuninn', sans-serif;
}

p {
  font-family: 'Noto Serif TC', serif;
}
</style>