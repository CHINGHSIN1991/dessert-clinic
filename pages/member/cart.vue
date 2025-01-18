<script setup lang="ts">
const cartItems = ref([
  {
    id: 1,
    name: '原味手工餅乾',
    price: 280,
    quantity: 2,
    image: '/images/product1.jpg',
    spec: '大包裝'
  },
]);

const total = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const updateQuantity = (index: number, change: number) => {
  const newQuantity = cartItems.value[index].quantity + change;
  if (newQuantity > 0) {
    cartItems.value[index].quantity = newQuantity;
  }
};

const removeItem = (index: number) => {
  cartItems.value.splice(index, 1);
};
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600 col-span-3">
      <div class="h-[calc(100vh-theme(spacing.32))] overflow-y-auto p-6">
        <h1 class="text-2xl font-bold font-huninn mb-6">購物車</h1>

        <div class="space-y-6">
          <div v-if="cartItems.length === 0" class="text-center py-12">
            <p class="text-gray-500 mb-4">購物車是空的</p>
            <NuxtLink to="/products/cookie">
              <Button>
                去逛逛
              </Button>
            </NuxtLink>
          </div>

          <div v-else>
            <div class="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-gray-500">
              <div class="col-span-6">商品資訊</div>
              <div class="col-span-2 text-center">單價</div>
              <div class="col-span-2 text-center">數量</div>
              <div class="col-span-2 text-center">小計</div>
            </div>

            <div class="space-y-4">
              <div v-for="(item, index) in cartItems" :key="item.id"
                class="grid grid-cols-12 gap-4 items-center py-4 border-b">
                <div class="col-span-6 flex gap-4">
                  <div class="w-24 h-24">
                    <img :src="item.image" class="w-full h-full object-cover rounded" :alt="item.name">
                  </div>
                  <div class="flex flex-col justify-between py-1">
                    <div>
                      <h3 class="font-medium">{{ item.name }}</h3>
                      <p class="text-sm text-gray-500">規格：{{ item.spec }}</p>
                    </div>
                    <Button variant="ghost" class="text-red-500 w-fit" @click="removeItem(index)">
                      刪除
                    </Button>
                  </div>
                </div>

                <div class="col-span-2 text-center">
                  NT$ {{ item.price }}
                </div>

                <div class="col-span-2 flex justify-center items-center space-x-2">
                  <Button variant="outline" size="sm" @click="updateQuantity(index, -1)">
                    -
                  </Button>
                  <span class="w-12 text-center">{{ item.quantity }}</span>
                  <Button variant="outline" size="sm" @click="updateQuantity(index, 1)">
                    +
                  </Button>
                </div>

                <div class="col-span-2 text-center font-medium">
                  NT$ {{ item.price * item.quantity }}
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-col items-end gap-4">
              <div class="text-right">
                <p class="text-gray-500">總計</p>
                <p class="text-2xl font-bold">NT$ {{ total }}</p>
              </div>
              <div class="flex gap-4">
                <NuxtLink to="/products/cookie">
                  <Button variant="outline">
                    繼續購物
                  </Button>
                </NuxtLink>
                <Button>
                  前往結帳
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-2 border-slate-600">
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