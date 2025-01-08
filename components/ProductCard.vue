<script setup lang="ts">
import type { Product } from '~/types';

interface Props {
  product: Product;
}

defineProps<Props>();
</script>

<template>
  <div class="group border-2 border-slate-600 hover:shadow-lg transition-shadow box-border">
    <!-- 產品圖片 -->
    <div class="relative aspect-square overflow-hidden mb-4">
      <img :src="product.cover_url"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt="產品圖片">

      <!-- 標籤 -->
      <div class="absolute top-2 left-2 flex gap-2">
        <Badge v-for="tag in product.tags" :key="tag.label" :style="{ backgroundColor: tag.color }">
          {{ tag.label }}
        </Badge>
      </div>
    </div>

    <!-- 產品資訊 -->
    <div class="space-y-2">
      <h3 class="text-xl font-bold">{{ $t(product.name_key) }}</h3>

      <!-- 規格和價格 -->
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600">
          {{ product.spec.length }} {{ $t('product-specifications') }}
        </span>
        <span class="font-semibold">
          NT$ {{ product.spec[0].price }}
          <span class="text-sm text-gray-600">{{ $t('product-price-from') }}</span>
        </span>
      </div>

      <div class="text-sm text-gray-600">
        {{ $t('product-shelf-life') }}:
        {{ product.production_date.amount }}{{ product.production_date.unit }}
      </div>

      <NuxtLink :to="`/products/${product.id}`" class="block mt-4">
        <Button class="w-full" variant="outline">
          {{ $t('view-details') }}
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>