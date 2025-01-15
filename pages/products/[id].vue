<script setup lang="ts">
import { mockProduct } from '~/constants';
import { toast } from 'vue-sonner';

const route = useRoute();
const router = useRouter();
const { data } = useFetch<any>(`https://vue-lessons-api.vercel.app/courses/${route.params.id}`);
// 輪播圖相關
const currentSlide = ref(0);
const slides = ref([
  '/images/product1.jpg',
  '/images/product2.jpg',
  '/images/product3.jpg'
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0
    ? slides.value.length - 1
    : currentSlide.value - 1;
};

const mockProductT = toRef(mockProduct);

const selectedSpec = ref(mockProductT.value.spec[0]);
const quantity = ref(1);

const onToast = (product: string) => {
  console.log(product);
  toast('Product added', {
    description: `${product} successfully added to shopping cart`,
    action: {
      label: 'Go to cart',
      onClick: () => router.push({ path: "/member/cart" }),
    },
  });
};
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full m-4">
    <div class="border-2 border-slate-600">
    </div>
    <div class="border-2 border-slate-600 col-span-3">
      <!-- <h1>{{ route.fullPath }}</h1>
        <p>{{ data }}</p>
        <NuxtLink :to="`/product/${route.params.id}/`">內頁介紹</NuxtLink>
        <br>
        <NuxtLink :to="`/product/${route.params.id}/A`">A</NuxtLink>
        <br>
        <NuxtLink :to="`/product/${route.params.id}/B`">B</NuxtLink>
        <br>
        <NuxtLink :to="`/product/${route.params.id}/C`">C</NuxtLink>
        <NuxtPage /> -->
      <Breadcrumb class="mx-6 mt-4 mb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <NuxtLink to="/products">{{ $t('section-product-introduction') }}</NuxtLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <NuxtLink :to="`/products/${mockProductT.category}`">{{ $t(`product-category-${mockProductT.category}`) }}
            </NuxtLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{{ $t(mockProductT.name_key) }}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div class="relative overflow-hidden rounded-lg border-2 border-slate-600">
          <div class="relative h-[400px]">
            <TransitionGroup name="slide">
              <img v-for="(slide, index) in mockProductT.img_list" :key="slide" :src="slide"
                v-show="currentSlide === index" class="absolute top-0 left-0 w-full h-full object-cover" />
            </TransitionGroup>
          </div>

          <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            <Button v-for="(_, index) in mockProductT.img_list" :key="index" variant="ghost"
              class="w-2 h-2 rounded-full" :class="currentSlide === index ? 'bg-slate-600' : 'bg-slate-300'"
              @click="currentSlide = index" />
          </div>

          <Button variant="ghost" class="absolute left-2 top-1/2 -translate-y-1/2" @click="prevSlide">
            <Icon name="ep:arrow-left-bold" style="color: black" />
          </Button>
          <Button variant="ghost" class="absolute right-2 top-1/2 -translate-y-1/2" @click="nextSlide">
            <Icon name="ep:arrow-right-bold" style="color: black" />
          </Button>
        </div>

        <div class="flex flex-col gap-6">
          <div class="border-b-2 border-slate-600 pb-4">
            <h1 class="text-3xl font-bold mb-2">{{ mockProductT.name_key }}</h1>
            <p class="text-2xl font-semibold">NT$ {{ selectedSpec.price }}</p>
            <div class="flex">
              <badge v-for="label in mockProductT.tags" :key="label.label">{{ label.label }}</badge>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-gray-600">{{ mockProductT.description_key }}</p>
            <ul class="list-disc list-inside space-y-2">
              <li>{{ `保存方式: ${mockProductT.preservation_key}` }}</li>
              <li>{{ `保存期限: ${mockProductT.production_date.amount}${mockProductT.production_date.unit}` }}</li>
              <li>{{ `產品內容: ${selectedSpec.content.map(item => `${item.name}*${item.qty}`).join(', ')}` }}</li>
              <li>{{ `產品成分: ${mockProductT.ingredient_keys.join(', ')}` }}</li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">規格</h2>
            <div class="flex gap-4">
              <Button v-for="spec in mockProductT.spec" :key="spec.spec_key" variant="outline"
                :class="selectedSpec.spec_key === spec.spec_key ? 'border-slate-600' : ''" @click="selectedSpec = spec">
                {{ spec.spec_key }}
              </Button>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <Label>數量</Label>
              <div class="flex items-center border-2 border-slate-600 rounded">
                <Button variant="ghost" @click="quantity > 1 && quantity--">
                  -
                </Button>
                <span class="px-4">{{ quantity }}</span>
                <Button variant="ghost" @click="quantity++">
                  +
                </Button>
              </div>
            </div>

            <Button class="w-full" @click="onToast(mockProductT.name_key)">
              加入購物車
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Toaster />
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
