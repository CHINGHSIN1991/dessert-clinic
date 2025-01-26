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

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const shipping = computed(() => {
  return subtotal.value >= 1000 ? 0 : 60;
});

const discount = ref(0);

const total = computed(() => {
  return subtotal.value + shipping.value - discount.value;
});

const showCouponInput = ref(false);
const couponCode = ref('');

const applyCoupon = () => {
  console.log('應用優惠碼:', couponCode.value);
};

const updateQuantity = (index: number, change: number) => {
  const newQuantity = cartItems.value[index].quantity + change;
  if (newQuantity > 0) {
    cartItems.value[index].quantity = newQuantity;
  }
};

const removeItem = (index: number) => {
  cartItems.value.splice(index, 1);
};

// 運送方式選項
const shippingMethods = ref([
  {
    id: 'home',
    name: '宅配到府',
    description: '2-3 個工作天',
    price: 60
  },
  {
    id: 'cvs',
    name: '超商取貨',
    description: '3-5 個工作天',
    price: 60
  }
]);

// 付款方式選項
const paymentMethods = ref([
  {
    id: 'credit',
    name: '信用卡付款',
    description: 'Visa, Master, JCB'
  },
  {
    id: 'transfer',
    name: '銀行轉帳',
    description: '需於 24 小時內完成付款'
  },
  {
    id: 'cvs_pay',
    name: '超商付款',
    description: '需於 24 小時內完成付款'
  }
]);

// 選擇的運送和付款方式
const selectedShipping = ref('home');
const selectedPayment = ref('credit');
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600">
    </div>

    <!-- 購物車主要內容 -->
    <div class="border-2 border-slate-600 col-span-2">
      <div class="h-[calc(100vh-theme(spacing.32))] overflow-y-auto">
        <div class="p-6 space-y-8">
          <!-- 購物車標題 -->
          <h1 class="text-2xl font-bold font-huninn">{{ $t('cart.title') }}</h1>

          <!-- 商品列表 -->
          <div class="space-y-6">
            <div v-if="cartItems.length === 0" class="text-center py-12">
              <p class="text-gray-500 mb-4">{{ $t('cart.empty') }}</p>
              <NuxtLink to="/products/cookie">
                <Button>{{ $t('cart.go-shopping') }}</Button>
              </NuxtLink>
            </div>

            <div v-else>
              <!-- 表頭 -->
              <div class="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-gray-500">
                <div class="col-span-6">{{ $t('cart.product-info') }}</div>
                <div class="col-span-2 text-center">{{ $t('cart.unit-price') }}</div>
                <div class="col-span-2 text-center">{{ $t('cart.quantity') }}</div>
                <div class="col-span-2 text-center">{{ $t('cart.subtotal') }}</div>
              </div>

              <!-- 商品列表 -->
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
                        <p class="text-sm text-gray-500">{{ $t('cart.spec') }}：{{ item.spec }}</p>
                      </div>
                      <Button variant="ghost" class="text-red-500 w-fit" @click="removeItem(index)">
                        {{ $t('cart.delete') }}
                      </Button>
                    </div>
                  </div>

                  <div class="col-span-2 text-center">NT$ {{ item.price }}</div>

                  <div class="col-span-2 flex justify-center items-center space-x-2">
                    <Button variant="outline" size="sm" @click="updateQuantity(index, -1)">-</Button>
                    <span class="w-12 text-center">{{ item.quantity }}</span>
                    <Button variant="outline" size="sm" @click="updateQuantity(index, 1)">+</Button>
                  </div>

                  <div class="col-span-2 text-center font-medium">
                    NT$ {{ item.price * item.quantity }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 運送方式選擇 -->
          <div class="space-y-4">
            <h2 class="text-xl font-bold font-huninn">{{ $t('cart.shipping-method.title') }}</h2>
            <div class="space-y-3">
              <div v-for="method in shippingMethods" :key="method.id" class="border-2 rounded-lg p-4 cursor-pointer"
                :class="selectedShipping === method.id ? 'border-slate-600' : 'border-gray-200'"
                @click="selectedShipping = method.id">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      :class="selectedShipping === method.id ? 'border-slate-600' : 'border-gray-300'">
                      <div v-if="selectedShipping === method.id" class="w-3 h-3 rounded-full bg-slate-600"></div>
                    </div>
                    <div>
                      <h3 class="font-medium">{{ $t(`cart.shipping-method.${method.id}`) }}</h3>
                      <p class="text-sm text-gray-500">{{ $t(`cart.shipping-method.${method.id}-desc`) }}</p>
                    </div>
                  </div>
                  <span class="font-medium">NT$ {{ method.price }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 付款方式選擇 -->
          <div class="space-y-4">
            <h2 class="text-xl font-bold font-huninn">{{ $t('cart.payment-method.title') }}</h2>
            <div class="space-y-3">
              <div v-for="method in paymentMethods" :key="method.id" class="border-2 rounded-lg p-4 cursor-pointer"
                :class="selectedPayment === method.id ? 'border-slate-600' : 'border-gray-200'"
                @click="selectedPayment = method.id">
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    :class="selectedPayment === method.id ? 'border-slate-600' : 'border-gray-300'">
                    <div v-if="selectedPayment === method.id" class="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div>
                    <h3 class="font-medium">{{ $t(`cart.payment-method.${method.id}`) }}</h3>
                    <p class="text-sm text-gray-500">{{ $t(`cart.payment-method.${method.id}-desc`) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 底部按鈕 -->
          <div class="flex justify-between pt-4 border-t">
            <NuxtLink to="/products/cookie">
              <Button variant="outline">{{ $t('cart.continue-shopping') }}</Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- 金額計算區域 -->
    <div class="border-2 border-slate-600">
      <div class="p-6 space-y-6">
        <h2 class="text-xl font-bold font-huninn">{{ $t('cart.order-summary') }}</h2>

        <div class="space-y-4">
          <div class="flex justify-between">
            <span class="text-gray-600">{{ $t('cart.total-products') }}</span>
            <span>NT$ {{ subtotal }}</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-600">{{ $t('cart.shipping') }}</span>
            <span>
              {{ shipping === 0 ? $t('cart.free-shipping') : `NT$ ${shipping}` }}
              <p class="text-xs text-gray-500">{{ $t('cart.free-shipping-notice') }}</p>
            </span>
          </div>

          <div v-if="discount > 0" class="flex justify-between text-red-500">
            <span>{{ $t('cart.discount') }}</span>
            <span>-NT$ {{ discount }}</span>
          </div>

          <div class="border-t pt-4">
            <div class="flex justify-between font-bold">
              <span>{{ $t('cart.total') }}</span>
              <span>NT$ {{ total }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <Button variant="outline" class="w-full justify-between" @click="showCouponInput = !showCouponInput">
            <span>{{ $t('cart.coupon.button') }}</span>
            <span>
              <Icon
                :name="showCouponInput ? 'material-symbols:keyboard-arrow-up' : 'material-symbols:keyboard-arrow-down'"
                size="20" />
            </span>
          </Button>

          <div v-if="showCouponInput" class="space-y-2">
            <input v-model="couponCode" type="text"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              :placeholder="$t('cart.coupon.placeholder')">
            <Button class="w-full" :disabled="!couponCode" @click="applyCoupon">
              {{ $t('cart.coupon.apply') }}
            </Button>
          </div>
        </div>

        <Button class="w-full" size="lg">{{ $t('cart.checkout') }}</Button>

        <div class="text-sm text-gray-500 space-y-2">
          <p>{{ $t('cart.notices.price') }}</p>
          <p>{{ $t('cart.notices.coupon') }}</p>
          <p>{{ $t('cart.notices.sale') }}</p>
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