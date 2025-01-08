<script setup lang="ts">
import { mockProduct } from '~/constants';

const products = ref([mockProduct, mockProduct, mockProduct, mockProduct, mockProduct, mockProduct, mockProduct]); // 之後可以替換成 API 數據

// const { data } = useFetch<any>('https://vue-lessons-api.vercel.app/courses/list');
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600">
    </div>

    <div class="border-2 border-slate-600 col-span-3 h-[calc(100vh-6rem)] overflow-y-auto">
      <div class="p-6">
        <div class="mb-8">
          <h1 class="text-3xl font-bold">{{ $t('product-category-cookie') }}</h1>
          <p class="text-gray-600 mt-2">{{ $t('product-category-cookie-description') }}</p>
        </div>

        <div class="space-y-12">
          <!-- 產品網格，確保不會超出容器寬度 -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pr-2">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>